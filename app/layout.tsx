import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '咏曖文庫',
  description:
    'Midjouney(nijijourney)とChatGPTを活用し、装丁デザインの学習を目的とした架空の出版社をイメージしたWebサイトです。',
  openGraph: {
    title: '咏曖文庫',
    description:
      'Midjouney(nijijourney)とChatGPTを活用し、装丁デザインの学習を目的とした架空の出版社をイメージしたWebサイトです。',
    images: ['/ogp_image.jpg'],
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={inter.className}>{children}</body>
  </html>
)

export default RootLayout
