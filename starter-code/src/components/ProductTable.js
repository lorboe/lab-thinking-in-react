import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = (props) => {
    return (
      <div>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody> <ProductRow products={props.products}/></tbody>
      </table>
      
      </div>
    )
  }

export default ProductTable