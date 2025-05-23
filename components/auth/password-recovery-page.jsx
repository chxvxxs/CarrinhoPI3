"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, CheckCircle } from "lucide-react"

export default function PasswordRecoveryPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (!email) {
      setError("Por favor, digite seu e-mail")
      setIsLoading(false)
      return
    }

    try {
      // Simulação de envio de e-mail
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSuccess(true)
    } catch (err) {
      setError("Erro ao enviar e-mail. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">E-mail enviado!</h1>
          <p className="text-gray-600 mb-6">
            Enviamos um link para redefinir sua senha para <strong>{email}</strong>. Verifique sua caixa de entrada e
            spam.
          </p>
          <div className="space-y-3">
            <Link
              href="/login"
              className="block w-full py-3 px-4 bg-[#FF6B35] text-white rounded-md hover:bg-[#e85a2a] transition-colors text-center"
            >
              Voltar ao login
            </Link>
            <button
              onClick={() => {
                setIsSuccess(false)
                setEmail("")
              }}
              className="block w-full py-3 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Enviar novamente
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-lg shadow-sm p-8">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center">
              <Mail className="h-8 w-8 text-[#FF6B35]" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Recuperar senha</h1>
          <p className="text-gray-600">Digite seu e-mail e enviaremos um link para redefinir sua senha</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="p-3 bg-red-50 text-red-500 rounded-md text-sm">{error}</div>}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
              placeholder="seu@email.com"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF6B35] hover:bg-[#e85a2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B35] transition-colors disabled:opacity-50"
          >
            {isLoading ? "Enviando..." : "Enviar link de recuperação"}
          </button>
        </form>

        {/* Link para voltar */}
        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="inline-flex items-center text-sm text-[#FF6B35] hover:text-[#e85a2a] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar ao login
          </Link>
        </div>
      </div>

      {/* Informações adicionais */}
      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-blue-800 mb-2">Não recebeu o e-mail?</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Verifique sua caixa de spam</li>
          <li>• Certifique-se de que digitou o e-mail correto</li>
          <li>• Aguarde alguns minutos e tente novamente</li>
        </ul>
      </div>
    </div>
  )
}
