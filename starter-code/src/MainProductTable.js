import React, { Component } from "react";
import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";
import jsondata from "./data.json";
import ProductRow from "./ProductRow.js";

export default class MainProductTable extends Component {
constructor(props) { 
 super(props)
 
 this.state = {
  data: jsondata.data,
  stocked: true,
  search: '',

}

 console.log(this.state.data)

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
let upperSearch = this.state.search.toUpperCase()
  let filteredProducts = this.state.data
  .filter(product => {
    if(this.state.stocked && !product.stocked) return false
    if (product.name.toUpperCase().includes(upperSearch)) return true
    return false
  })
  .sort((a,b) => a.category > b.category ? 1: -1 ) 

    return (
      <div className="MainTable">
        <div className="SearchBar">
          Searchbar
          <SearchBar
            filterText={this.state.search}
            stocked={this.state.stocked}
            onSearch={this.handleSearch}
            onStocked={this.handleStocked}
          />
        </div>
        <div className="ProductTable">
        <ProductTable 
        products={filteredProducts} 
        // filterText={this.state.filterText}
        // inStockOnly={this.state.inStockOnly}
        />
        </div>
      </div>
    );
  }
}
