import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Header } from '@/shared/components'

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'KFC | Главная',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head> */}
      <body className={nunito.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
