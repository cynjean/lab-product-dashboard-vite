import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  const initialProducts = [
    { id: 1, name: "Laptop", price: "$999", inStock: true },
    { id: 2, name: "Phone", price: "$699", inStock: false },
    { id: 3, name: "Tablet", price: "$499", inStock: true }
  ]
  // TODO: Implement state to manage filtering
const [products, setProducts] = useState(initialProducts);
const [filter, setFilter] = useState("all");
  // TODO: Implement logic to filter products based on availability
const filteredProducts = products.filter((product) => {
  if (filter === "inStock") {
    return product.inStock;
  }

  if (filter === "outOfStock") {
    return !product.inStock;
  }

  return true; // show all products
});
// remove button logic
const removeProduct = (id) => {
  setProducts(products.filter((p) => p.id !== id));
};
  return (
    <div>
      <h1>Product Dashboard</h1>
      {/* TODO: Add buttons to allow filtering by availability */}
      <button onClick={() => setFilter("all")}>
        All Products
      </button>
      <button onClick={() => setFilter("inStock")}>
        In Stock
      </button>
      <button onClick={() => setFilter("outOfStock")}>
        Out of Stock
      </button>
      {/* Pass the filtered list so the buttons control which products are shown. */}
      <ProductList 
      products={filteredProducts}
      removeProduct={removeProduct} 
      />
    </div>
  );
};

export default App;
