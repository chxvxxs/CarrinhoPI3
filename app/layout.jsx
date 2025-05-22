import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Recifeirinha - Produtos Artesanais de Pernambuco",
  description: "Apoiando o comércio local de Recife",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
