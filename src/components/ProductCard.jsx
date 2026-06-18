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
      {/* TODO: Display product name */}
      <h3>{product.name}</h3>
      {/* TODO: Display product price */}
      <p>Price: {product.price}</p>
      {/* TODO: Show if the product is in stock or out of stock */}
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>

      <button onClick={() => removeProduct(product.id)}>
        Remove
        </button>
    </div>
  );
};
export default ProductCard;
