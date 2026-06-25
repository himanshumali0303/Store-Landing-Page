import React from "react";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  return (
    <>
      <Hero />

      <div className="grid grid-cols-4 gap-6 p-10">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
