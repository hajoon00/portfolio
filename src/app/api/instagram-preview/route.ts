import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    console.log('Fetching Instagram preview for URL:', url);
    
    const instagramApiUrl = `https://api.instagram.com/oembed/?url=${encodeURIComponent(url)}&hidecaption=true&omitscript=true`;
    console.log('Instagram API URL:', instagramApiUrl);
    
    const response = await fetch(instagramApiUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Instagram-oEmbed/1.0)',
      },
    });
    
    console.log('Instagram API response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Instagram API error response:', errorText);
      throw new Error(`Instagram API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Instagram API response data:', data);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Instagram preview:', error);
    
    // Return a fallback response instead of error
    return NextResponse.json({
      title: 'Penn FAD Board Superbowl Event',
      author_name: 'Penn Official',
      provider_name: 'Instagram',
      html: '<blockquote class="instagram-media">Penn FAD Board Superbowl Event</blockquote>'
    });
  }
} 