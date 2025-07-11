import React from 'react'

async function ProductsCatchAllRoutes({params} : {
    params: Promise<{slug?: String[]}>
}) {
    const {slug} = await params;
    console.log(slug)
  return (
    <div>
      <h1>Products Filter</h1>
    </div>
  )
}

export default ProductsCatchAllRoutes
