"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulação de envio
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      setError("Erro ao enviar mensagem. Por favor, tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h1>
        <p className="text-lg sm:text-xl text-gray-600">Estamos aqui para ajudar e responder suas dúvidas</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Informações de contato */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Informações de Contato</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center text-[#FF6B35]">
                  <Mail className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-1">E-mail</h3>
                <p className="text-gray-600 text-sm sm:text-base">contato@recifeirinha.com.br</p>
                <p className="text-gray-600 text-sm sm:text-base">suporte@recifeirinha.com.br</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center text-[#FF6B35]">
                  <Phone className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-1">Telefone</h3>
                <p className="text-gray-600 text-sm sm:text-base">(81) 3333-4444</p>
                <p className="text-gray-600 text-sm sm:text-base">(81) 98765-4321 (WhatsApp)</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center text-[#FF6B35]">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-1">Endereço</h3>
                <p className="text-gray-600 text-sm sm:text-base">Av. Rio Branco, 123</p>
                <p className="text-gray-600 text-sm sm:text-base">Recife Antigo, Recife - PE</p>
                <p className="text-gray-600 text-sm sm:text-base">CEP: 50030-310</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-4">Horário de Atendimento</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2 text-sm sm:text-base">
                <span className="font-medium">Segunda a Sexta:</span> 9h às 18h
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-medium">Sábado:</span> 9h às 13h
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#FF6B35] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#FF6B35] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#FF6B35] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#FF6B35] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Formulário de contato */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Envie uma Mensagem</h2>

          {success ? (
            <div className="bg-green-50 p-4 sm:p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <MessageSquare className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-green-800 mb-2">Mensagem enviada com sucesso!</h3>
              <p className="text-green-700 mb-4 text-sm sm:text-base">
                Obrigado por entrar em contato. Nossa equipe responderá o mais breve possível.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {error && <div className="p-3 bg-red-50 text-red-500 rounded-md text-sm">{error}</div>}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] text-sm sm:text-base"
                  required
                >
                  <option value="">Selecione um assunto</option>
                  <option value="duvida">Dúvida sobre produto</option>
                  <option value="pedido">Informações sobre pedido</option>
                  <option value="parceria">Quero ser um artesão parceiro</option>
                  <option value="sugestao">Sugestões</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] text-sm sm:text-base"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center px-6 py-3 bg-[#FF6B35] text-white rounded-md hover:bg-[#e85a2a] transition-colors disabled:opacity-50 text-sm sm:text-base"
              >
                {isLoading ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Enviar mensagem
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Mapa */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Nossa Localização</h2>
        <div className="bg-gray-100 rounded-lg h-64 sm:h-80 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-8 w-8 sm:h-12 sm:w-12 text-[#FF6B35] mx-auto mb-4" />
            <p className="text-gray-600 text-sm sm:text-base">
              Av. Rio Branco, 123 - Recife Antigo, Recife - PE, CEP: 50030-310
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {[
            {
              question: "Como posso me tornar um artesão parceiro?",
              answer:
                "Para se tornar um artesão parceiro, preencha o formulário de contato selecionando a opção 'Quero ser um artesão parceiro' ou envie um e-mail para parceiros@recifeirinha.com.br com informações sobre seus produtos.",
            },
            {
              question: "Qual é o prazo de entrega dos produtos?",
              answer:
                "O prazo de entrega varia de acordo com a sua localização e o tipo de produto. Em geral, para Recife e região metropolitana, o prazo é de 2 a 3 dias úteis. Para outras regiões do Brasil, pode variar de 5 a 15 dias úteis.",
            },
            {
              question: "Vocês oferecem frete grátis?",
              answer:
                "Sim, oferecemos frete grátis para compras acima de R$ 150,00 para todo o Brasil. Também temos frete grátis para compras acima de R$ 80,00 para Recife e região metropolitana.",
            },
            {
              question: "Como funciona a política de trocas e devoluções?",
              answer:
                "Você pode solicitar a troca ou devolução de um produto em até 7 dias após o recebimento. Para produtos alimentícios, aceitamos devoluções apenas em caso de problemas de qualidade identificados no momento da entrega.",
            },
          ].map((faq, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">{faq.question}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
