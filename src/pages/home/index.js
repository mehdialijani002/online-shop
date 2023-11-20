import React from "react";
import Navbar from "../../component/Navbar";
import BannerSlider from "../../component/sliderBanner";
import Cards from "../../component/productCards/index";
import Offer from "../../component/offerCard/index";
import ProductList from "../../component/productList";
import Footer from "../../component/footer/index";
import ProductDetail from "../../component/productDetail/index";
import UpButton from "../../component/upButton";
function Home() {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <Cards />
      <Offer />
      <ProductList />
      <ProductDetail />
      <UpButton />
      <Footer />
    </div>
  );
}

export default Home;
