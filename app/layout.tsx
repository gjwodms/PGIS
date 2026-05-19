import type { Metadata } from 'next'
import 'mapbox-gl/dist/mapbox-gl.css'

export const metadata: Metadata = {
  title: 'Nocturnal',
  description: '청년 야간 활동 추천 플랫폼',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
