import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, removeProduct }) => {
  // Show a friendly empty state when the current filter has no matching products.
if (!products || products.length === 0) {
  return <p>No products available</p>
}
  return (
    <div>
      {/* Render one reusable product card for every product in the list. */}
      {products.map((product) => (
        <ProductCard
        key={product.id}
        product={product}
        removeProduct={removeProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
