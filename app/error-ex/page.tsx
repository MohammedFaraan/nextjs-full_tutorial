import { error } from 'console'
import React from 'react'

function getData() {
    const shouldError = Math.random() > 0.5

    if (shouldError) {
        throw Error("Failed to fetch data");
    }

    return [
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
}

function ErrorExample() {
    const data = getData()
  return (
    <div>
      <h2>Error example</h2>
      <div>
        {
            data.map((product) => (
                <div key={product.id} className='border border-white p-2 mb-2'>
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                </div>
            ) )

        }
      </div>
    </div>
  )
}

export default ErrorExample
