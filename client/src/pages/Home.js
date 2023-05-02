import React from "react";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import "./home.css"; // import the css file for the home page

const Home = () => {
  return (
    <div>
      <div>
        {" "}
        <Banner />
      </div>

      <div className="container">
        <CategoryMenu />
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
