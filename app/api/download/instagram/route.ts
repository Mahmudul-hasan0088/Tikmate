import { NextResponse } from "next/server"

// Response types
interface MediaResponse {
  id: string
  type: "image" | "video"
  url: string
  thumbnail_url?: string
  width: number
  height: number
  duration?: number
  view_count?: number
  caption?: string
  timestamp: number
}

interface AuthorResponse {
  username: string
  full_name: string
  profile_picture: string
  profile_url: string
  is_verified: boolean
  is_private: boolean
  statistics: {
    followers_count: number
    following_count: number
  }
  biography: string
}

interface PostResponse {
  post_id: string
  type: "single" | "carousel"
  author: AuthorResponse
  statistics: {
    likes_count: number
    views_count?: number
  }
  is_advertisement: boolean
  created_at: string
  media: MediaResponse[]
}

// API Response Interface
interface ApiResponse {
  success: boolean
  data?: PostResponse
  error?: {
    code: string
    message: string
  }
}

// Constants
const INSTAGRAM_API_ENDPOINT = "https://www.instagram.com/graphql/query"
const INSTAGRAM_DOCUMENT_ID = "8845758582119845"

class InstagramService {
  private static extractShortcode(url: string): string {
    const splitUrl = url.split("/")
    const postTypes = ["p", "reel", "tv"]
    const shortcodeIndex =
      splitUrl.findIndex((item) => postTypes.includes(item)) + 1
    const shortcode = splitUrl[shortcodeIndex]

    if (!shortcode) {
      throw new Error("INVALID_URL_FORMAT")
    }

    return shortcode
  }

  private static async fetchPostData(shortcode: string): Promise<any> {
    const variables = {
      shortcode,
      fetch_tagged_user_count: null,
      hoisted_comment_id: null,
      hoisted_reply_id: null,
    }

    const params = new URLSearchParams({
      variables: JSON.stringify(variables),
      doc_id: INSTAGRAM_DOCUMENT_ID,
    })

    const response = await fetch(
      `${INSTAGRAM_API_ENDPOINT}?${params.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (!response.ok) {
      throw new Error("API_REQUEST_FAILED")
    }

    const data = await response.json()
    if (!data.data?.xdt_shortcode_media) {
      throw new Error("INVALID_POST_TYPE")
    }

    return data.data.xdt_shortcode_media
  }

  private static formatMediaResponse(mediaNode: any): MediaResponse {
    const baseMedia = {
      id: mediaNode.id || `media-${Date.now()}`,
      width: mediaNode.dimensions.width,
      height: mediaNode.dimensions.height,
      caption: mediaNode.edge_media_to_caption?.edges[0]?.node.text,
      timestamp: mediaNode.taken_at_timestamp,
    }

    if (mediaNode.is_video) {
      return {
        ...baseMedia,
        type: "video",
        url: mediaNode.video_url,
        thumbnail_url: mediaNode.display_url,
        view_count: mediaNode.video_view_count,
        duration: mediaNode.video_duration,
      }
    }

    return {
      ...baseMedia,
      type: "image",
      url: mediaNode.display_url,
    }
  }

  private static formatAuthorResponse(owner: any): AuthorResponse {
    return {
      username: owner.username,
      full_name: owner.full_name,
      profile_picture: owner.profile_pic_url,
      profile_url: `https://www.instagram.com/${owner.username}/`,
      is_verified: owner.is_verified,
      is_private: owner.is_private,
      statistics: {
        followers_count: owner.followers_count,
        following_count: owner.following_count,
      },
      biography: owner.biography,
    }
  }

  private static formatPostResponse(data: any): PostResponse {
    const isCarousel = data.__typename === "XDTGraphSidecar"
    const mediaList = isCarousel
      ? data.edge_sidecar_to_children.edges.map((edge: any) =>
          this.formatMediaResponse(edge.node)
        )
      : [this.formatMediaResponse(data)]

    return {
      post_id: data.id || `post-${Date.now()}`,
      type: isCarousel ? "carousel" : "single",
      author: this.formatAuthorResponse(data.owner),
      statistics: {
        likes_count: data.edge_media_preview_like.count,
        views_count: data.is_video ? data.video_view_count : undefined,
      },
      is_advertisement: data.is_ad,
      created_at: new Date(data.taken_at_timestamp * 1000).toISOString(),
      media: mediaList,
    }
  }

  static async getPostData(url: string): Promise<ApiResponse> {
    try {
      const shortcode = this.extractShortcode(url)
      const rawData = await this.fetchPostData(shortcode)
      const formattedData = this.formatPostResponse(rawData)

      return {
        success: true,
        data: formattedData,
      }
    } catch (error) {
      return {
        success: false,
        error: {
          code: error instanceof Error ? error.message : "UNKNOWN_ERROR",
          message: this.getErrorMessage(
            error instanceof Error ? error.message : "UNKNOWN_ERROR"
          ),
        },
      }
    }
  }

  private static getErrorMessage(code: string): string {
    const errorMessages: Record<string, string> = {
      INVALID_URL_FORMAT: "The provided Instagram URL is invalid",
      API_REQUEST_FAILED: "Failed to fetch data from Instagram",
      INVALID_POST_TYPE: "Only posts and reels are supported",
      UNKNOWN_ERROR: "An unexpected error occurred",
    }

    return errorMessages[code] || "An unexpected error occurred"
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get("url")

  if (!url) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "MISSING_URL",
          message: "Instagram URL is required",
        },
      },
      { status: 400 }
    )
  }

  const response = await InstagramService.getPostData(url)
  const statusCode = response.success ? 200 : 400

  return NextResponse.json(response, { status: statusCode })
}
