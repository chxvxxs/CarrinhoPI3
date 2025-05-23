import ProductDetailPage from "@/components/products/product-detail-page"
import Footer from "@/components/footer"

export default function ProductDetail({ params }) {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <ProductDetailPage productId={params.id} />
      </main>
      <Footer />
    </>
  )
}
