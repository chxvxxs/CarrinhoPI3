import PasswordRecoveryPage from "@/components/auth/password-recovery-page"
import Footer from "@/components/footer"

export default function PasswordRecovery() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[70vh]">
          <PasswordRecoveryPage />
        </div>
      </main>
      <Footer />
    </>
  )
}
