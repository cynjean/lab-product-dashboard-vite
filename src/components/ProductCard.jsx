import React from 'react';

const ProductCard = ({ product, removeProduct }) => {
  return (
    <div 
    className={ 
      product.inStock 
      ? "productCard" 
      : "outOfStockClass"
    } 
    >
      {/* Display the product details passed down from ProductList. */}
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>

      <button onClick={() => removeProduct(product.id)}>
        Remove
        </button>
    </div>
  );
};
export default ProductCard;
