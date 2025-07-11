import Link from 'next/link'
import React from 'react'

function ProductsPage() {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 2499
        },
        {
            id: 2,
            name: "Mobile",
            price: 1999
        },
        {
            id: 3,
            name: "Watch",
            price: 999
        }
    ]
  return (
    <div>
      <h2 className='text-lg font-bold mb-4'>Products Page</h2>

      <div>
        {
            products.map((product) => (
                <div className='border border-white p-2 mb-2'>
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                    <Link href={`/products/${product.id}`}>View Details</Link>
                </div>
            ) )

        }
      </div>
    </div>
  )
}

export default ProductsPage
