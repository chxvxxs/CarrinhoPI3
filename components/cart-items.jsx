"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"
import Image from "next/image"

export default function CartItems() {
  // Estado para os itens do carrinho
  const [cartItems, setCartItems] = useState([
    {
      id: "item1",
      name: "Bolo de Rolo Tradicional",
      seller: "Doces da Boa Vista",
      tag: {
        text: "Artesanal",
        color: "green",
      },
      price: 25.9,
      originalPrice: 29.9,
      quantity: 1,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='8' r='7'%3E%3C/circle%3E%3Cpolyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'%3E%3C/polyline%3E%3C/svg%3E",
    },
    {
      id: "item2",
      name: "Camisa Recife Antigo",
      seller: "Moda Pernambucana",
      tag: {
        text: "Feito à mão",
        color: "blue",
      },
      price: 49.9,
      quantity: 1,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
    },
    {
      id: "item3",
      name: "Café Especial Pernambucano",
      seller: "Cafeteria do Marco Zero",
      tag: {
        text: "Orgânico",
        color: "yellow",
      },
      price: 32.5,
      originalPrice: 38.0,
      quantity: 1,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M18 8h1a4 4 0 0 1 0 8h-1'%3E%3C/path%3E%3Cpath d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'%3E%3C/path%3E%3Cline x1='6' y1='1' x2='6' y2='4'%3E%3C/line%3E%3Cline x1='10' y1='1' x2='10' y2='4'%3E%3C/line%3E%3Cline x1='14' y1='1' x2='14' y2='4'%3E%3C/line%3E%3C/svg%3E",
    },
  ])

  // Função para atualizar a quantidade
  const updateQuantity = (itemId, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          const newQuantity = Math.max(1, item.quantity + change)
          return { ...item, quantity: newQuantity }
        }
        return item
      }),
    )
  }

  // Função para remover um item
  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Meu Carrinho</h2>
        <span className="text-gray-500">{cartItems.length} itens</span>
      </div>

      {cartItems.map((item, index) => (
        <div key={item.id} className={`${index < cartItems.length - 1 ? "border-b pb-6 mb-6" : "pb-2"}`}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={96}
                height={96}
                className="w-full h-full object-cover product-image"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">Vendido por: {item.seller}</p>
                  <div className="flex items-center mt-1">
                    <span className={`bg-${item.tag.color}-100 text-${item.tag.color}-800 text-xs px-2 py-0.5 rounded`}>
                      {item.tag.text}
                    </span>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 text-right">
                  <p className="font-semibold text-[#FF6B35]">R$ {item.price.toFixed(2).replace(".", ",")}</p>
                  {item.originalPrice && (
                    <p className="text-xs text-gray-500 line-through">
                      R$ {item.originalPrice.toFixed(2).replace(".", ",")}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center border rounded-md">
                  <button
                    className="px-3 py-1 text-gray-600 hover:text-[#FF6B35]"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="px-3 py-1">{item.quantity}</span>
                  <button
                    className="px-3 py-1 text-gray-600 hover:text-[#FF6B35]"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button className="text-gray-500 hover:text-red-500" onClick={() => removeItem(item.id)}>
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
