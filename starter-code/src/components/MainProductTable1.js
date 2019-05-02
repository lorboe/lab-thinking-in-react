import React, { Component } from 'react'
import SearchBar1 from './SearchBar1'
import ProductTable from './ProductTable'

class MainProductTable1 extends Component {

state = {
  products: this.props.products,
  productsFiltered: this.props.products,
  stocked: false,
  searchInput: ""
}

handleSearch = (name, value) => {
  const {stocked} = this.state
  let productsFiltered = this.state.products.filter(el => {
    return el.name.toLowerCase().includes(value.toLowerCase());
  });
 if (stocked) productsFiltered = productsFiltered.filter(el => el.stocked);
  this.setState({
    // searchInput: value
    [name]: value,
    productsFiltered: productsFiltered
  });
};

handleStocked = (name, value) => {
  let { productsFiltered, products, searchInput } = this.state;
  if (value === true) {
    productsFiltered = productsFiltered.filter(el => el.stocked === value);
  } else {
    productsFiltered = products.filter(el => {
      return el.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
    });
  }
  this.setState({
    [name]: value,
    productsFiltered: productsFiltered
  });
}

  render() {
    return (
      <div>
        <SearchBar1
        searchInput={this.state.searchInput}
        stocked={this.state.stocked}
        onSearch={this.handleSearch}
        onStocked={this.handleStocked}
        />

        <ProductTable
         products={this.state.productsFiltered} 
          />
      </div>
    )
  }
}


export default MainProductTable1