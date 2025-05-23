import RegisterForm from "@/components/register-form"
import Footer from "@/components/footer"

export default function RegisterPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[70vh]">
          <RegisterForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
