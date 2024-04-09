import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl"
      />

      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>

      <p className="text-gray-600">${product.price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex content-center mx-auto">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
