import Link from "next/link"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <>
      <main className="container mx-auto px-4 py-16 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-[#FF6B35] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Página não encontrada</h2>
        <p className="text-gray-600 max-w-md mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/" className="px-6 py-3 bg-[#FF6B35] text-white rounded-md hover:bg-[#e85a2a] transition-colors">
            Voltar para a página inicial
          </Link>
          <Link
            href="/produtos"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Explorar produtos
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
