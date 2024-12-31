export async function downloadTikTok(url: string) {
  try {
    const response = await fetch(
      `https://tikwm.com/api/?url=${encodeURIComponent(url)}`
    )
    const data = await response.json()

    if (data.code !== 0) {
      throw new Error(data.msg || "Failed to fetch video")
    }

    return {
      success: true,
      data,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong",
    }
  }
}
