import './globals.css'
import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'

const font = Titillium_Web(
  {
    weight: ['200', '300', '400', '600', '700', '900'],
    subsets: ['latin-ext'],
  }
)

export const metadata: Metadata = {
  title: 'Judici A.i.',
  description: 'Judici A.i. is a platform for legal professionals to automate their work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
