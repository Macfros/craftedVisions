import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from "framer-motion"


const roboto = Roboto({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Crafted Visions',
  description: 'Showcase and disocver remarkable designs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  )
}
