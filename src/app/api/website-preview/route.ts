import { NextRequest, NextResponse } from 'next/server';

interface WebsitePreviewData {
  title?: string;
  description?: string;
  author_name?: string;
  url?: string;
  html?: string;
  provider_name?: string;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    console.log('Fetching website preview for URL:', url);
    
    // 웹사이트의 메타데이터를 가져오기 위한 요청
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
      },
      // 타임아웃 설정
      signal: AbortSignal.timeout(10000), // 10초 타임아웃
    });
    
    console.log('Website response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`Website responded with status: ${response.status}`);
    }
    
    const html = await response.text();
    
    // HTML에서 메타데이터 추출
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const descriptionMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
    const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i);
    const ogDescriptionMatch = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i);
    
    const previewData: WebsitePreviewData = {
      title: ogTitleMatch?.[1] || titleMatch?.[1] || '냥이버스 - 디지털 추모관',
      description: ogDescriptionMatch?.[1] || descriptionMatch?.[1] || '하솜과 하론의 디지털 세계를 경험해보세요.',
      url: url,
      provider_name: 'Website Preview',
    };
    
    console.log('Extracted preview data:', previewData);
    
    return NextResponse.json(previewData);
  } catch (error) {
    console.error('Error fetching website preview:', error);
    
    // 에러 시 기본 응답 반환 (냥이버스 전용)
    return NextResponse.json({
      title: '냥이버스 - 디지털 추모관',
      description: '하솜과 하론의 독특한 성격을 담은 디지털 추모관입니다. 픽셀 아트 스타일로 제작된 인터랙티브 경험을 제공합니다.',
      url: url,
      provider_name: 'Nyangiverse',
    });
  }
} 