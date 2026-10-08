import type React from "react"
import { Work_Sans, Open_Sans } from "next/font/google"
import { Analytics } from '@vercel/analytics/next'
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata = {
  title: "Dr. Braulino Peixoto | Neuropsicólogo e Neurocientista",
  description:
    "Transformando a atividade elétrica cerebral em saúde, performance e bem-estar. Atendimentos presenciais e online com protocolos exclusivos em neuromodulação.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${workSans.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
