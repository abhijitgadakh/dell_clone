import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "../api/api";
import Slider from "../components/Slider";
import TopSections from "../components/TopSections";

const Home = () => {
  const [latestArrivals, setLatestArrivals] = useState([]);
  const [mostRated, setMostRated] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/products");
        setLatestArrivals(data.slice(0, 4)); // Latest 4 products
        setMostRated(
          [...data].sort((a, b) => b.rating - a.rating).slice(0, 4) // Top 4 rated products
        );
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="slider">
        <Slider/>
      </div>
      <TopSections/>
      <h2>Latest Arrivals</h2>
      <div className="product-grid">
        {latestArrivals.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <h2>Most Rated</h2>
      <div className="product-grid">
        {mostRated.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
