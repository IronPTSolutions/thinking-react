import ProductForm from "./components/ProductForm";
import FilterableProductTable from "./components/FilterableProductTable";

function App() {
  return (
    <div className="App container">
      <ProductForm />
      <hr />
      <FilterableProductTable />
    </div>
  );
}

export default App;
