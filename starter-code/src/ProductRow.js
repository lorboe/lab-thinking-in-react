import React from 'react'


const ProductRow = ({name, price, stocked}) => {
let style ={}
if (!stocked) style.color = "red"

return(
  <tr>
    <td style={style}> {name} </td>
    <td style={{textAlign:"right"}}>{price} € </td>
  </tr>
)
}
export default ProductRow;
