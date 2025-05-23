"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Star } from "lucide-react"

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("todos")

  // Dados simulados para a página inicial
  const featuredProducts = [
    {
      id: 1,
      name: "Bolo de Rolo Tradicional",
      price: 25.9,
      originalPrice: 29.9,
      seller: "Doces da Boa Vista",
      rating: 4.8,
      reviews: 124,
      category: "Doces",
      tag: { text: "Artesanal", color: "green" },
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='8' r='7'%3E%3C/circle%3E%3Cpolyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'%3E%3C/polyline%3E%3C/svg%3E",
    },
    {
      id: 2,
      name: "Camisa Recife Antigo",
      price: 49.9,
      seller: "Moda Pernambucana",
      rating: 4.5,
      reviews: 89,
      category: "Roupas",
      tag: { text: "Feito à mão", color: "blue" },
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
    },
    {
      id: 3,
      name: "Café Especial Pernambucano",
      price: 32.5,
      originalPrice: 38.0,
      seller: "Cafeteria do Marco Zero",
      rating: 4.9,
      reviews: 156,
      category: "Bebidas",
      tag: { text: "Orgânico", color: "yellow" },
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M18 8h1a4 4 0 0 1 0 8h-1'%3E%3C/path%3E%3Cpath d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'%3E%3C/path%3E%3Cline x1='6' y1='1' x2='6' y2='4'%3E%3C/line%3E%3Cline x1='10' y1='1' x2='10' y2='4'%3E%3C/line%3E%3Cline x1='14' y1='1' x2='14' y2='4'%3E%3C/line%3E%3C/svg%3E",
    },
    {
      id: 4,
      name: "Artesanato em Barro",
      price: 45.0,
      seller: "Artesanato Caruaru",
      rating: 4.7,
      reviews: 67,
      category: "Artesanato",
      tag: { text: "Tradicional", color: "orange" },
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'%3E%3C/path%3E%3C/svg%3E",
    },
  ]

  const categories = [
    {
      id: "doces",
      name: "Doces Regionais",
      count: 28,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='8' r='7'%3E%3C/circle%3E%3Cpolyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'%3E%3C/polyline%3E%3C/svg%3E",
    },
    {
      id: "artesanato",
      name: "Artesanato",
      count: 45,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      id: "roupas",
      name: "Moda Regional",
      count: 32,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
    },
    {
      id: "bebidas",
      name: "Bebidas",
      count: 18,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M18 8h1a4 4 0 0 1 0 8h-1'%3E%3C/path%3E%3Cpath d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'%3E%3C/path%3E%3Cline x1='6' y1='1' x2='6' y2='4'%3E%3C/line%3E%3Cline x1='10' y1='1' x2='10' y2='4'%3E%3C/line%3E%3Cline x1='14' y1='1' x2='14' y2='4'%3E%3C/line%3E%3C/svg%3E",
    },
    {
      id: "acessorios",
      name: "Acessórios",
      count: 24,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Crect x='2' y='7' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cpath d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      id: "musica",
      name: "Música",
      count: 12,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M9 18V5l12-2v13'%3E%3C/path%3E%3Ccircle cx='6' cy='18' r='3'%3E%3C/circle%3E%3Ccircle cx='18' cy='16' r='3'%3E%3C/circle%3E%3C/svg%3E",
    },
  ]

  const featuredArtisans = [
    {
      id: 1,
      name: "Maria das Rendas",
      category: "Rendas e Bordados",
      location: "Olinda, PE",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
    },
    {
      id: 2,
      name: "João do Barro",
      category: "Cerâmica",
      location: "Caruaru, PE",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
    },
    {
      id: 3,
      name: "Coletivo Mulheres de Barro",
      category: "Cerâmica",
      location: "Tracunhaém, PE",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Ana Beatriz",
      location: "Recife, PE",
      text: "Comprei um bolo de rolo para presentear um amigo e foi um sucesso! A qualidade é incrível e o sabor é autêntico. Recomendo demais!",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Eduardo",
      location: "São Paulo, SP",
      text: "Mesmo morando longe de Pernambuco, consigo matar a saudade da minha terra com os produtos da Recifeirinha. Entrega rápida e tudo muito bem embalado.",
      rating: 5,
    },
    {
      id: 3,
      name: "Juliana Alves",
      location: "Olinda, PE",
      text: "Adoro a proposta de valorizar os artesãos locais. Já comprei várias peças de artesanato e todas são lindas e de excelente qualidade.",
      rating: 4,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#FF6B35] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Descubra o melhor de Pernambuco</h1>
              <p className="text-xl mb-8">
                Produtos artesanais, doces regionais e muito mais, diretamente dos artesãos para sua casa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/produtos"
                  className="px-6 py-3 bg-white text-[#FF6B35] font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  Explorar produtos
                </Link>
                <Link
                  href="/artesaos"
                  className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  Conhecer artesãos
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <Image
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'%3E%3C/path%3E%3Cpolyline points='9 22 9 12 15 12 15 22'%3E%3C/polyline%3E%3C/svg%3E"
                    alt="Produtos artesanais de Pernambuco"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                  <div className="text-[#FF6B35] font-bold">+200</div>
                  <div className="text-gray-600 text-sm">Artesãos</div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
                  <div className="text-[#FF6B35] font-bold">+1000</div>
                  <div className="text-gray-600 text-sm">Produtos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* Categorias */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Categorias</h2>
            <Link href="/produtos" className="text-[#FF6B35] font-medium flex items-center hover:underline">
              Ver todas <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/produtos?categoria=${category.id}`}>
                <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mx-auto bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mb-3">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 text-[#FF6B35]"
                    />
                  </div>
                  <h3 className="font-medium text-gray-800">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} produtos</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em destaque */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Produtos em Destaque</h2>
            <Link href="/produtos" className="text-[#FF6B35] font-medium flex items-center hover:underline">
              Ver todos <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/produtos/${product.id}`}>
                <div className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          product.tag.color === "green"
                            ? "bg-green-100 text-green-800"
                            : product.tag.color === "blue"
                              ? "bg-blue-100 text-blue-800"
                              : product.tag.color === "yellow"
                                ? "bg-yellow-100 text-yellow-800"
                                : product.tag.color === "orange"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {product.tag.text}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">Vendido por: {product.seller}</p>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-[#FF6B35]">R$ {product.price.toFixed(2).replace(".", ",")}</p>
                        {product.originalPrice && (
                          <p className="text-xs text-gray-500 line-through">
                            R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                          </p>
                        )}
                      </div>
                      <button className="px-3 py-1.5 bg-[#FF6B35] text-white text-sm rounded hover:bg-[#e85a2a] transition-colors">
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner promocional */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Sabores de Pernambuco</h2>
              <p className="text-lg mb-6">
                Descubra os doces e iguarias tradicionais que fazem parte da cultura pernambucana. Do bolo de rolo à
                cartola, temos as melhores opções para você experimentar.
              </p>
              <Link
                href="/produtos?categoria=doces"
                className="inline-block px-6 py-3 bg-[#FF6B35] text-white font-medium rounded-md hover:bg-[#e85a2a] transition-colors"
              >
                Explorar doces regionais
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='8' r='7'%3E%3C/circle%3E%3Cpolyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'%3E%3C/polyline%3E%3C/svg%3E"
                  alt="Doces regionais de Pernambuco"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#FF6B35] p-3 rounded-lg shadow-lg">
                  <div className="text-white font-bold">15% OFF</div>
                  <div className="text-white text-sm">Primeira compra</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artesãos em destaque */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Artesãos em Destaque</h2>
            <Link href="/artesaos" className="text-[#FF6B35] font-medium flex items-center hover:underline">
              Ver todos <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArtisans.map((artisan) => (
              <Link key={artisan.id} href={`/artesaos/${artisan.id}`}>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center p-6">
                    <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden mr-4">
                      <Image
                        src={artisan.image || "/placeholder.svg"}
                        alt={artisan.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{artisan.name}</h3>
                      <p className="text-[#FF6B35]">{artisan.category}</p>
                      <p className="text-sm text-gray-600">{artisan.location}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <button className="w-full py-2 border border-[#FF6B35] text-[#FF6B35] rounded-md hover:bg-[#FF6B35] hover:bg-opacity-10 transition-colors">
                      Ver perfil e produtos
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
            O que nossos clientes dizem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FF6B35] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Junte-se à comunidade Recifeirinha</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Cadastre-se agora e receba ofertas exclusivas, novidades sobre produtos artesanais e muito mais!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cadastro"
              className="px-6 py-3 bg-white text-[#FF6B35] font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Criar uma conta
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Já tenho uma conta
            </Link>
          </div>
        </div>
      </section>

      {/* Informações adicionais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#FF6B35]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Produtos Autênticos</h3>
              <p className="text-gray-600">
                Todos os produtos são feitos por artesãos locais, garantindo autenticidade e qualidade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#FF6B35]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Preços Justos</h3>
              <p className="text-gray-600">
                Valorizamos o trabalho dos artesãos com preços justos, beneficiando produtores e consumidores.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#FF6B35]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Entrega Segura</h3>
              <p className="text-gray-600">
                Embalagens especiais garantem que seus produtos cheguem em perfeito estado, em todo o Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
