import React, { Component } from 'react'

export default class SearchBar1 extends Component {


 handleSearch = event => {
    let { value, name } = event.target;

    this.props.onSearch(name, value);
  };

  handleStocked = event => {
    let { value, name } = event.target;
     value = !this.props.stocked;
    this.props.onStocked(name, value);
  };


  render() {
    return (
      <div>
       <form>       
          <input
          name="searchInput"
          type="text"
          placeholder="Search"
          value={this.props.searchInput}
          onChange={this.handleSearch}
        />
        <br />
        Only show products in stock: 
        <input
          type="checkbox"
          name="stocked"
          checked={this.props.stocked}
          onChange={this.handleStocked}
        />
        </form>
      </div>
    )
  }
}
