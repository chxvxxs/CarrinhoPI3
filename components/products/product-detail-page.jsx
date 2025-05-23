"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Star, ShoppingCart, Minus, Plus, Share2, MessageCircle, Shield, Truck } from "lucide-react"

export default function ProductDetailPage({ productId }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState("description")

  // Dados simulados do produto
  const product = {
    id: productId,
    name: "Bolo de Rolo Tradicional",
    price: 25.9,
    originalPrice: 29.9,
    seller: "Doces da Boa Vista",
    rating: 4.8,
    reviews: 124,
    category: "Doces",
    tag: { text: "Artesanal", color: "green" },
    description:
      "Delicioso bolo de rolo tradicional pernambucano, feito com ingredientes selecionados e muito carinho. Uma receita passada de geração em geração, que traz todo o sabor e tradição da nossa terra.",
    ingredients: ["Farinha de trigo", "Açúcar", "Ovos", "Manteiga", "Goiabada", "Leite condensado"],
    specifications: {
      peso: "500g",
      validade: "7 dias",
      conservacao: "Geladeira",
      origem: "Recife, PE",
    },
    images: [
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='8' r='7'%3E%3C/circle%3E%3Cpolyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'%3E%3C/polyline%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='8' r='7'%3E%3C/circle%3E%3Cpolyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'%3E%3C/polyline%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='8' r='7'%3E%3C/circle%3E%3Cpolyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'%3E%3C/polyline%3E%3C/svg%3E",
    ],
    stock: 15,
    shipping: {
      free: true,
      estimatedDays: "2-3 dias úteis",
    },
  }

  const reviews = [
    {
      id: 1,
      user: "Maria Silva",
      rating: 5,
      date: "15/04/2023",
      comment: "Produto excelente! Chegou rapidinho e o sabor é incrível. Recomendo muito!",
    },
    {
      id: 2,
      user: "João Santos",
      rating: 4,
      date: "10/04/2023",
      comment: "Muito bom, sabor autêntico. Só achei que poderia vir um pouco maior pelo preço.",
    },
    {
      id: 3,
      user: "Ana Costa",
      rating: 5,
      date: "05/04/2023",
      comment: "Simplesmente perfeito! Lembra o bolo da minha avó. Já comprei várias vezes.",
    },
  ]

  const relatedProducts = [
    {
      id: 2,
      name: "Tapioca Gourmet",
      price: 18.5,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpath d='M8 12h8'%3E%3C/path%3E%3Cpath d='M12 8v8'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      id: 3,
      name: "Café Especial",
      price: 32.5,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M18 8h1a4 4 0 0 1 0 8h-1'%3E%3C/path%3E%3Cpath d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'%3E%3C/path%3E%3Cline x1='6' y1='1' x2='6' y2='4'%3E%3C/line%3E%3Cline x1='10' y1='1' x2='10' y2='4'%3E%3C/line%3E%3Cline x1='14' y1='1' x2='14' y2='4'%3E%3C/line%3E%3C/svg%3E",
    },
  ]

  const updateQuantity = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <a href="/" className="hover:text-[#FF6B35]">
              Início
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/produtos" className="hover:text-[#FF6B35]">
              Produtos
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="#" className="hover:text-[#FF6B35]">
              {product.category}
            </a>
          </li>
          <li>/</li>
          <li className="text-gray-800">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Galeria de imagens */}
        <div>
          <div className="mb-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 bg-gray-100 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? "border-[#FF6B35]" : "border-transparent"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Informações do produto */}
        <div>
          <div className="mb-4">
            <span
              className={`inline-block text-xs px-2 py-1 rounded ${
                product.tag.color === "green"
                  ? "bg-green-100 text-green-800"
                  : product.tag.color === "blue"
                    ? "bg-blue-100 text-blue-800"
                    : product.tag.color === "yellow"
                      ? "bg-yellow-100 text-yellow-800"
                      : product.tag.color === "orange"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-gray-100 text-gray-800"
              } mb-2`}
            >
              {product.tag.text}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-gray-600">
              Vendido por: <span className="text-[#FF6B35] font-medium">{product.seller}</span>
            </p>
          </div>

          {/* Avaliações */}
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {product.rating} ({product.reviews} avaliações)
            </span>
          </div>

          {/* Preço */}
          <div className="mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-[#FF6B35]">R$ {product.price.toFixed(2).replace(".", ",")}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <p className="text-sm text-green-600">
                Economia de R$ {(product.originalPrice - product.price).toFixed(2).replace(".", ",")}
              </p>
            )}
          </div>

          {/* Quantidade e botões */}
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center border rounded-md">
                <button onClick={() => updateQuantity(-1)} className="p-2 hover:bg-gray-100" disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => updateQuantity(1)}
                  className="p-2 hover:bg-gray-100"
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <span className="text-sm text-gray-600">{product.stock} disponíveis</span>
            </div>

            <div className="flex space-x-3 mb-4">
              <button className="flex-1 flex items-center justify-center px-6 py-3 bg-[#FF6B35] text-white rounded-md hover:bg-[#e85a2a] transition-colors">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Adicionar ao carrinho
              </button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 border rounded-md ${isFavorite ? "text-red-500 border-red-500" : "text-gray-500 border-gray-300 hover:text-red-500"}`}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
              </button>
              <button className="p-3 border border-gray-300 text-gray-500 rounded-md hover:text-[#FF6B35]">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            <button className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Comprar agora
            </button>
          </div>

          {/* Informações de entrega */}
          <div className="border-t pt-6">
            <div className="flex items-center mb-2">
              <Truck className="h-5 w-5 text-[#FF6B35] mr-2" />
              <span className="font-medium">Entrega</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">
              {product.shipping.free ? "Frete grátis" : "Calcular frete"} • {product.shipping.estimatedDays}
            </p>

            <div className="flex items-center mt-4">
              <Shield className="h-5 w-5 text-[#FF6B35] mr-2" />
              <span className="font-medium">Garantia</span>
            </div>
            <p className="text-sm text-gray-600">Satisfação garantida ou seu dinheiro de volta</p>
          </div>
        </div>
      </div>

      {/* Abas de informações */}
      <div className="mb-12">
        <div className="border-b">
          <nav className="flex space-x-8">
            {[
              { id: "description", label: "Descrição" },
              { id: "specifications", label: "Especificações" },
              { id: "reviews", label: `Avaliações (${product.reviews})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-[#FF6B35] text-[#FF6B35]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="py-6">
          {activeTab === "description" && (
            <div>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <h4 className="font-medium text-gray-800 mb-2">Ingredientes:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "specifications" && (
            <div>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <dt className="font-medium text-gray-800 capitalize">{key}:</dt>
                    <dd className="text-gray-700">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-gray-800">{product.rating}</span>
                  <span className="text-gray-600 ml-2">de 5 estrelas</span>
                </div>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Escrever avaliação
                </button>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-4">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="font-medium text-gray-800">{review.user}</span>
                      <span className="text-gray-500 ml-2">• {review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Produtos relacionados */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Produtos relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gray-100">
                <Image
                  src={relatedProduct.image || "/placeholder.svg"}
                  alt={relatedProduct.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2">{relatedProduct.name}</h3>
                <p className="font-semibold text-[#FF6B35]">R$ {relatedProduct.price.toFixed(2).replace(".", ",")}</p>
                <button className="w-full mt-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
                  Ver produto
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
