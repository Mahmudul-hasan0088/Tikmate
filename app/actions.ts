'use server'

export async function downloadTikTok(url: string) {
  try {
    const response = await fetch(`https://tikwm.com/api/?url=${encodeURIComponent(url)}`)
    const data = await response.json()
    
    if (data.code !== 0) {
      throw new Error(data.msg || 'Failed to fetch video')
    }
    
    return {
      success: true,
      data: {
        id: data.data.id,
        title: data.data.title,
        cover: data.data.cover,
        duration: data.data.duration,
        play: data.data.play
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Something went wrong'
    }
  }
}

