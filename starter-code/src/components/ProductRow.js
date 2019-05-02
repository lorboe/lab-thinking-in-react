import React from 'react'

const ProductRow =  (props) =>  {

return (
  <div>
        {props.products.map((el, i) => (
       <tr>
         {!el.stocked ?
        <td style={{color:"red"}}> {el.name} </td> :  <td> {el.name} </td>}
         <td style={{textAlign:"right"}}>{el.price} € </td> 
       </tr>
    ))}
    </div>
    )
  }

export default ProductRow