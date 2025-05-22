"use client"

import { useState } from "react"

export default function OrderSummary() {
  // Estado para o cupom
  const [coupon, setCoupon] = useState("")

  // Estado para a opção de entrega
  const [shippingOption, setShippingOption] = useState("standard")

  // Valores do pedido
  const orderSummary = {
    subtotal: 108.3,
    discount: 9.5,
    shipping: {
      standard: 12.0,
      express: 22.0,
      pickup: 0.0,
    },
    installments: 3,
  }

  // Calcular o total com base na opção de entrega selecionada
  const calculateTotal = () => {
    const shippingCost =
      shippingOption === "standard"
        ? orderSummary.shipping.standard
        : shippingOption === "express"
          ? orderSummary.shipping.express
          : 0

    return orderSummary.subtotal - orderSummary.discount + shippingCost
  }

  const total = calculateTotal()
  const installmentValue = (total / orderSummary.installments).toFixed(2).replace(".", ",")

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Resumo do Pedido</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">R$ {orderSummary.subtotal.toFixed(2).replace(".", ",")}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Desconto</span>
          <span className="font-medium text-green-600">- R$ {orderSummary.discount.toFixed(2).replace(".", ",")}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Frete</span>
          <span className="font-medium">
            R${" "}
            {(shippingOption === "standard"
              ? orderSummary.shipping.standard
              : shippingOption === "express"
                ? orderSummary.shipping.express
                : 0
            )
              .toFixed(2)
              .replace(".", ",")}
          </span>
        </div>
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-bold text-lg text-[#FF6B35]">R$ {total.toFixed(2).replace(".", ",")}</span>
          </div>
          <div className="text-xs text-gray-500 text-right mt-1">
            ou {orderSummary.installments}x de R$ {installmentValue} sem juros
          </div>
        </div>
      </div>

      {/* Cupom de desconto */}
      <div className="mb-6">
        <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">
          Cupom de desconto
        </label>
        <div className="flex">
          <input
            type="text"
            id="coupon"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="flex-1 border rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
            placeholder="Digite seu cupom"
          />
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-r-md hover:bg-gray-200 transition-colors text-sm">
            Aplicar
          </button>
        </div>
      </div>

      {/* Opções de entrega */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Opções de entrega</label>
        <div className="space-y-2">
          <div
            className={`flex items-center justify-between border rounded-md p-3 ${shippingOption === "standard" ? "bg-gray-50" : ""}`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                id="shipping-standard"
                name="shipping"
                className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35]"
                checked={shippingOption === "standard"}
                onChange={() => setShippingOption("standard")}
              />
              <label htmlFor="shipping-standard" className="ml-2 text-sm text-gray-700">
                Padrão (3-5 dias úteis)
              </label>
            </div>
            <span className="text-sm font-medium">
              R$ {orderSummary.shipping.standard.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <div
            className={`flex items-center justify-between border rounded-md p-3 ${shippingOption === "express" ? "bg-gray-50" : ""}`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                id="shipping-express"
                name="shipping"
                className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35]"
                checked={shippingOption === "express"}
                onChange={() => setShippingOption("express")}
              />
              <label htmlFor="shipping-express" className="ml-2 text-sm text-gray-700">
                Expresso (1-2 dias úteis)
              </label>
            </div>
            <span className="text-sm font-medium">R$ {orderSummary.shipping.express.toFixed(2).replace(".", ",")}</span>
          </div>
          <div
            className={`flex items-center justify-between border rounded-md p-3 ${shippingOption === "pickup" ? "bg-gray-50" : ""}`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                id="shipping-pickup"
                name="shipping"
                className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35]"
                checked={shippingOption === "pickup"}
                onChange={() => setShippingOption("pickup")}
              />
              <label htmlFor="shipping-pickup" className="ml-2 text-sm text-gray-700">
                Retirar na loja
              </label>
            </div>
            <span className="text-sm font-medium text-green-600">Grátis</span>
          </div>
        </div>
      </div>

      {/* Botões de ação */}
      <button className="w-full py-3 bg-[#FF6B35] text-white rounded-md font-medium hover:bg-[#e85a2a] transition-colors btn-primary">
        Finalizar Compra
      </button>

      <button className="w-full mt-3 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors btn-outline">
        Continuar Comprando
      </button>

      {/* Pagamento seguro */}
      <div className="flex items-center justify-center mt-6 text-gray-500 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        Pagamento 100% seguro
      </div>
    </div>
  )
}
