import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    console.log('📥 Webhook recibido')

    const secret = request.headers.get('x-revalidate-secret')

    if (secret !== process.env.REVALIDATE_SECRET) {
      console.warn('❌ Secret inválido')

      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    console.log('🔄 Revalidando tag: noticia')

    revalidateTag('noticia', 'max')

    console.log('✅ Revalidación solicitada')

    return NextResponse.json({
      revalidated: true,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('💥 Error revalidando:', error)

    return NextResponse.json(
      {
        revalidated: false,
        error: 'Internal Server Error',
      },
      { status: 500 }
    )
  }
}