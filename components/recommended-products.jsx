import Image from "next/image"

export default function RecommendedProducts() {
  // Produtos recomendados
  const recommendedProducts = [
    {
      id: "rec1",
      name: "Artesanato em Barro",
      price: 45.0,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      id: "rec2",
      name: "CD Frevo Moderno",
      price: 22.9,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M9 18V5l12-2v13'%3E%3C/path%3E%3Ccircle cx='6' cy='18' r='3'%3E%3C/circle%3E%3Ccircle cx='18' cy='16' r='3'%3E%3C/circle%3E%3C/svg%3E",
    },
    {
      id: "rec3",
      name: "Bolsa Artesanal",
      price: 59.9,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'%3E%3Crect x='2' y='7' width='20' height='14' rx='2' ry='2'%3E%3C/rect%3E%3Cpath d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'%3E%3C/path%3E%3C/svg%3E",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Você também pode gostar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recommendedProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
            <div className="h-32 bg-gray-100 rounded-lg mb-3 overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={96}
                height={96}
                className="w-full h-full object-cover product-image"
              />
            </div>
            <h3 className="font-medium text-gray-800 text-sm">{product.name}</h3>
            <p className="text-[#FF6B35] font-semibold text-sm mt-1">R$ {product.price.toFixed(2).replace(".", ",")}</p>
            <button className="w-full mt-2 py-1.5 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors">
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
