import CartItems from "@/components/cart-items"
import OrderSummary from "@/components/order-summary"
import RecommendedProducts from "@/components/recommended-products"
import Footer from "@/components/footer"

export default function CartPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <CartItems />
            <RecommendedProducts />
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <OrderSummary />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
