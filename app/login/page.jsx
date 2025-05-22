import LoginForm from "@/components/login-form"
import Footer from "@/components/footer"

export default function LoginPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[70vh]">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
