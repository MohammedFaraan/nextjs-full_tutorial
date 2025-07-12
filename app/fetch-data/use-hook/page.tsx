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

async function UseHookEx()  {
    const products: ProductResponse  = await fetch('https://dummyjson.com/products')
.then(res => res.json())
// console.log(products)
  return (
    <div>
            <h2>UseHook Example</h2>
            <ul>
                {products.products.map((product) => (
                    <li key={product.id} >
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default UseHookEx
