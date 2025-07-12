import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export  const metadata: Metadata = {
    title: "Metadata Example",
    description: "This is the example of static metadata"
}

function MetadataEx() {
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
      <h2 className='text-lg font-bold mb-4'>Metadata Example Page</h2>

      <div>
        {
            products.map((product) => (
                <div key={product.id} className='border border-white p-2 mb-2'>
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                    <Link href={`/metadata-ex/${product.id}`}>View Details</Link>
                </div>
            ) )

        }
      </div>
    </div>
  )
}

export default MetadataEx
