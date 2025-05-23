"use client"

import { useState } from "react"
import { AlertTriangle } from "lucide-react"

export default function AccountSettings() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newsletter: false,
    productReviews: true,
  })

  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [passwordSuccess, setPasswordSuccess] = useState(false)
  const [passwordError, setPasswordError] = useState("")
  const [notificationsSuccess, setNotificationsSuccess] = useState(false)

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData({
      ...passwordData,
      [name]: value,
    })
  }

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target
    setNotifications({
      ...notifications,
      [name]: checked,
    })
  }

  const handlePasswordSubmit = async (e) => {
    e.preventDefault()
    setPasswordError("")
    setPasswordSuccess(false)

    // Validação simples
    if (passwordData.newPassword.length < 6) {
      setPasswordError("A nova senha deve ter pelo menos 6 caracteres")
      return
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError("As senhas não coincidem")
      return
    }

    // Simulação de atualização de senha
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setPasswordSuccess(true)
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
      setIsChangingPassword(false)
    } catch (error) {
      setPasswordError("Erro ao atualizar senha. Tente novamente.")
    }
  }

  const handleNotificationsSubmit = async (e) => {
    e.preventDefault()
    setNotificationsSuccess(false)

    // Simulação de atualização de preferências
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setNotificationsSuccess(true)
    } catch (error) {
      console.error("Erro ao atualizar preferências", error)
    }
  }

  const handleDeleteAccount = () => {
    // Aqui você implementaria a lógica para excluir a conta
    // Normalmente, isso envolveria uma confirmação adicional
    if (window.confirm("Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.")) {
      alert("Conta excluída com sucesso!")
      // Redirecionar para a página inicial ou de login
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Configurações da Conta</h2>

      {/* Seção de alteração de senha */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-800">Alterar senha</h3>
          {!isChangingPassword && (
            <button
              onClick={() => setIsChangingPassword(true)}
              className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              Alterar
            </button>
          )}
        </div>

        {passwordSuccess && (
          <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md text-sm">Senha atualizada com sucesso!</div>
        )}

        {isChangingPassword ? (
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            {passwordError && <div className="p-3 bg-red-50 text-red-500 rounded-md text-sm">{passwordError}</div>}

            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Senha atual
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                required
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Nova senha
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                required
              />
              <p className="text-xs text-gray-500 mt-1">A senha deve ter pelo menos 6 caracteres</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirmar nova senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                required
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsChangingPassword(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#e85a2a] transition-colors"
              >
                Atualizar senha
              </button>
            </div>
          </form>
        ) : (
          <p className="text-sm text-gray-600">
            Sua senha foi atualizada pela última vez em 15/03/2023. Recomendamos alterar sua senha regularmente para
            maior segurança.
          </p>
        )}
      </div>

      {/* Seção de preferências de notificação */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Preferências de notificação</h3>

        {notificationsSuccess && (
          <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md text-sm">
            Preferências de notificação atualizadas com sucesso!
          </div>
        )}

        <form onSubmit={handleNotificationsSubmit} className="space-y-4">
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="orderUpdates"
                checked={notifications.orderUpdates}
                onChange={handleNotificationChange}
                className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35] border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Atualizações de pedidos</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                name="promotions"
                checked={notifications.promotions}
                onChange={handleNotificationChange}
                className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35] border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Promoções e descontos</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                name="newsletter"
                checked={notifications.newsletter}
                onChange={handleNotificationChange}
                className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35] border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Newsletter semanal</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                name="productReviews"
                checked={notifications.productReviews}
                onChange={handleNotificationChange}
                className="h-4 w-4 text-[#FF6B35] focus:ring-[#FF6B35] border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Solicitações de avaliação de produtos</span>
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-[#e85a2a] transition-colors"
            >
              Salvar preferências
            </button>
          </div>
        </form>
      </div>

      {/* Seção de exclusão de conta */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Excluir conta</h3>
        <div className="bg-red-50 p-4 rounded-md mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Atenção</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  A exclusão da sua conta é permanente e irá remover todos os seus dados, incluindo histórico de
                  pedidos, endereços e preferências. Esta ação não pode ser desfeita.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleDeleteAccount}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Excluir minha conta
        </button>
      </div>
    </div>
  )
}
