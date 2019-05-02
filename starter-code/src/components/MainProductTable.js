import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class MainProductTable extends Component {

state = {
  products: this.props.products,
  stocked: true,
  search: '',
}

handleSearch = (newSearch) =>{
this.setState({
  search:newSearch
})
}

handleStocked = (newStocked) => {
this.setState ({
  stocked: newStocked
})


}
  render() {
    console.log(this.state.products)
    let upperSearch = this.state.search.toUpperCase();
    let filteredProducts = this.state.products.filter(product => {
      if(this.state.stocked && !product.stocked) return false
      if (product.name.toUpperCase().includes(upperSearch)) return true
      return false
    })
    .sort((a,b) => a.category > b.category ? 1: -1 ) 


    return (
      <div>
        <SearchBar
        filterText={this.state.search}
        stocked={this.state.stocked}
        onSearch={this.handleSearch}
        onStocked={this.handleStocked}
        
        />
        <ProductTable
         products={filteredProducts} 
          />
      </div>
    )
  }
}


export default MainProductTable