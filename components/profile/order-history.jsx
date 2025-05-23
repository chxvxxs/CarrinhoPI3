"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Package, Truck, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function OrderHistory() {
  // Estado para controlar quais pedidos estão expandidos
  const [expandedOrders, setExpandedOrders] = useState([])

  // Dados simulados de pedidos
  const orders = [
    {
      id: "PED123456",
      date: "15/04/2023",
      status: "Entregue",
      total: 108.3,
      items: [
        {
          id: 1,
          name: "Bolo de Rolo Tradicional",
          price: 25.9,
          quantity: 1,
          image:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='8' r='7'%3E%3C/circle%3E%3Cpolyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'%3E%3C/polyline%3E%3C/svg%3E",
        },
        {
          id: 2,
          name: "Camisa Recife Antigo",
          price: 49.9,
          quantity: 1,
          image:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
        },
      ],
      shipping: {
        address: "Rua das Flores, 123 - Boa Viagem, Recife - PE",
        method: "Padrão (3-5 dias úteis)",
        tracking: "BR123456789",
      },
      payment: {
        method: "Cartão de crédito",
        card: "**** **** **** 1234",
        installments: "3x de R$ 36,10",
      },
      timeline: [
        { date: "15/04/2023", status: "Pedido realizado", time: "10:30" },
        { date: "15/04/2023", status: "Pagamento confirmado", time: "11:45" },
        { date: "16/04/2023", status: "Em preparação", time: "09:15" },
        { date: "17/04/2023", status: "Enviado", time: "14:20" },
        { date: "20/04/2023", status: "Entregue", time: "15:30" },
      ],
    },
    {
      id: "PED123457",
      date: "02/05/2023",
      status: "Em trânsito",
      total: 82.4,
      items: [
        {
          id: 3,
          name: "Café Especial Pernambucano",
          price: 32.5,
          quantity: 2,
          image:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M18 8h1a4 4 0 0 1 0 8h-1'%3E%3C/path%3E%3Cpath d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'%3E%3C/path%3E%3Cline x1='6' y1='1' x2='6' y2='4'%3E%3C/line%3E%3Cline x1='10' y1='1' x2='10' y2='4'%3E%3C/line%3E%3Cline x1='14' y1='1' x2='14' y2='4'%3E%3C/line%3E%3C/svg%3E",
        },
      ],
      shipping: {
        address: "Rua das Flores, 123 - Boa Viagem, Recife - PE",
        method: "Expresso (1-2 dias úteis)",
        tracking: "BR987654321",
      },
      payment: {
        method: "PIX",
        card: null,
        installments: null,
      },
      timeline: [
        { date: "02/05/2023", status: "Pedido realizado", time: "14:20" },
        { date: "02/05/2023", status: "Pagamento confirmado", time: "14:25" },
        { date: "03/05/2023", status: "Em preparação", time: "10:30" },
        { date: "04/05/2023", status: "Enviado", time: "09:45" },
      ],
    },
  ]

  // Função para alternar a expansão de um pedido
  const toggleOrderExpansion = (orderId) => {
    setExpandedOrders((prev) => (prev.includes(orderId) ? prev.filter((id) => id !== orderId) : [...prev, orderId]))
  }

  // Função para renderizar o ícone de status
  const renderStatusIcon = (status) => {
    switch (status) {
      case "Entregue":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "Em trânsito":
        return <Truck className="h-5 w-5 text-blue-500" />
      case "Em preparação":
        return <Package className="h-5 w-5 text-yellow-500" />
      default:
        return <Package className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Meus Pedidos</h2>

      {orders.length === 0 ? (
        <div className="text-center py-8">
          <Package className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <p className="text-gray-500">Você ainda não realizou nenhum pedido.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg overflow-hidden">
              {/* Cabeçalho do pedido */}
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleOrderExpansion(order.id)}
              >
                <div className="flex items-center space-x-4">
                  {renderStatusIcon(order.status)}
                  <div>
                    <p className="font-medium text-gray-800">Pedido #{order.id}</p>
                    <p className="text-sm text-gray-500">
                      {order.date} • {order.status}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-800 mr-3">R$ {order.total.toFixed(2).replace(".", ",")}</span>
                  {expandedOrders.includes(order.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>

              {/* Detalhes do pedido (expandido) */}
              {expandedOrders.includes(order.id) && (
                <div className="border-t p-4">
                  {/* Itens do pedido */}
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-800 mb-3">Itens do pedido</h3>
                    <div className="space-y-3">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center">
                          <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden mr-3">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800">{item.name}</p>
                            <p className="text-xs text-gray-500">
                              {item.quantity} x R$ {item.price.toFixed(2).replace(".", ",")}
                            </p>
                          </div>
                          <div className="text-sm font-medium text-gray-800">
                            R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Informações de entrega e pagamento */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2">Informações de entrega</h3>
                      <p className="text-sm text-gray-600">{order.shipping.address}</p>
                      <p className="text-sm text-gray-600">Método: {order.shipping.method}</p>
                      {order.shipping.tracking && (
                        <p className="text-sm text-gray-600">
                          Rastreamento:{" "}
                          <a href="#" className="text-[#FF6B35] hover:underline">
                            {order.shipping.tracking}
                          </a>
                        </p>
                      )}
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-800 mb-2">Informações de pagamento</h3>
                      <p className="text-sm text-gray-600">Método: {order.payment.method}</p>
                      {order.payment.card && <p className="text-sm text-gray-600">Cartão: {order.payment.card}</p>}
                      {order.payment.installments && (
                        <p className="text-sm text-gray-600">Parcelamento: {order.payment.installments}</p>
                      )}
                    </div>
                  </div>

                  {/* Timeline do pedido */}
                  <div className="mt-6">
                    <h3 className="font-medium text-gray-800 mb-3">Status do pedido</h3>
                    <div className="relative">
                      {order.timeline.map((event, index) => (
                        <div key={index} className="flex mb-4 relative">
                          <div className="flex flex-col items-center mr-4">
                            <div
                              className={`rounded-full h-4 w-4 ${index === order.timeline.length - 1 ? "bg-[#FF6B35]" : "bg-green-500"}`}
                            ></div>
                            {index < order.timeline.length - 1 && (
                              <div className="h-full w-0.5 bg-gray-200 absolute top-4 bottom-0 left-2"></div>
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-sm text-gray-800">{event.status}</p>
                            <p className="text-xs text-gray-500">
                              {event.date} às {event.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botões de ação */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#e85a2a] transition-colors">
                      Rastrear pedido
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                      Solicitar devolução
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                      Ajuda com este pedido
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
