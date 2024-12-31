import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { url } = await request.json()

    const response = await fetch(
      `https://tikwm.com/api/?url=${encodeURIComponent(url)}`
    )
    const data = await response.json()

    if (data.code !== 0) {
      throw new Error(data.msg || "Failed to fetch video")
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 }
    )
  }
}
