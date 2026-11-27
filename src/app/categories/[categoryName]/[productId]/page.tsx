import React from 'react'

export default async function page(props:any) {

  
  const {productId, categoryName} = await props.params;

  console.log("categoryname",categoryName);
  console.log("product id",productId)

  const searchParams = await props.searchParams;
  const color = searchParams.color;
  const size = searchParams.size;
  return (
    <div>

      {categoryName} 
      {productId} 
      {color}
      {size}
    </div>
  )
}
