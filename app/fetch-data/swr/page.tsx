'use client'

import React from 'react'
import useSWR from 'swr'

const fecther = (url: string) => fetch(url).then(res => res.json())

interface Comments {
    id: number,
    body: string,
    likes: number
}

function SWRExample() {
    const {data, error, isLoading, mutate} = useSWR('https://dummyjson.com/comments', fecther, {
        revalidateOnFocus: true,
        refreshInterval: 30000,
        errorRetryCount: 3
    })

    if (isLoading) return <h1>Loading......</h1>
    if (error) return <h1>{error.message}</h1>

    console.log(data, error, isLoading)

    function handleRefresh() {
        mutate()
    }
  return (
    <div>
      <h1>SWR Example</h1>
      <button onClick={handleRefresh}>Refresh</button>
      <div>
        {
            data?.comments?.map((product: Comments) => (
                <div className='border border-white p-2 mb-2'>
                    <h4>{product.body}</h4>
                    <p>{product.likes}</p>
                </div>
            ) )

        }
      </div>
    </div>
  )
}

export default SWRExample
