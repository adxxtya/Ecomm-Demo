import React from "react";

const ProductList = () => {
  const products = [
    {
      image: "/product-1.png",
    },
    {
      image: "/product-2.png",
    },
    {
      image: "/product-1.png",
    },
    {
      image: "/product-2.png",
    },
    {
      image: "/product-1.png",
    },
    {
      image: "/product-2.png",
    },
    {
      image: "/product-1.png",
    },
    {
      image: "/product-2.png",
    },
    {
      image: "/product-1.png",
    },
    {
      image: "/product-2.png",
    },
    {
      image: "/product-1.png",
    },
    {
      image: "/product-2.png",
    },
    {
      image: "/product-1.png",
    },
    {
      image: "/product-2.png",
    },
    {
      image: "/product-1.png",
    },
    {
      image: "/product-2.png",
    },
    {
      image: "/product-1.png",
    },
    {
      image: "/product-2.png",
    },
    {
      image: "/product-1.png",
    },
    {
      image: "/product-2.png",
    },
    {
      image: "/product-1.png",
    },
    {
      image: "/product-2.png",
    },
  ];

  return (
    <div className="flex flex-wrap">
      {products.map((product, index) => (
        <div key={product.image} className="w-1/4  p-2">
          <img
            src={`/assets/Home/${product.image}`}
            alt={`Product ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
