import React from 'react'

interface Product {
    id: number,
    title: string,
    description: string
}

interface ProductResponse {
    products: Product[],
    total: number
}

async function ServerFetchDataEx() : Promise<ProductResponse> {
    const products = fetch('https://dummyjson.com/products')
.then(res => res.json())
  return (
    <div>
      <h2>ServerFetchDataEx</h2>

    </div>
  )
}

export default ServerFetchDataEx
