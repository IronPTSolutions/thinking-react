import React from "react";
import "./FilterableProductTable.css";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends React.Component {
  state = {
    search: "foo",
    inStock: false,
  };

  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar
          search={this.state.search}
          onSearch={(newSearch) => {
            this.setState({ search: newSearch });
          }}
          inStock={this.state.inStock}
          onCheck={(checked) => {
            this.setState({ inStock: checked });
          }}
        />
        <ProductTable search={this.state.search} inStock={this.state.inStock} />
      </div>
    );
  }
}

export default FilterableProductTable;
