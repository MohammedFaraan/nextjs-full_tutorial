async function PageDetailsPage({params} : {
    params: Promise<{id: String}>
} ) {
    const {id} =  await params
  return (
    <div>
      <h3>Products Details of Products {id}</h3>
    </div>
  )
}

export default PageDetailsPage
