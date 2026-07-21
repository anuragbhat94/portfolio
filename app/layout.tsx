import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anurag Bhat | Civic Innovation & Program Strategy',
  description:
    'Portfolio of Anurag Bhat, a civic innovation and program strategy professional working across community development, public-sector modernization, research, and evaluation.',
  authors: [{ name: 'Anurag Bhat' }],
  creator: 'Anurag Bhat',
  openGraph: {
    title: 'Anurag Bhat | Civic Innovation & Program Strategy',
    description:
      'Selected work in community development, public-sector modernization, applied research, energy strategy, and climate adaptation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
