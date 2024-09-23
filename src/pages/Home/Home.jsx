import React from 'react'
import Hero from "../../components/Hero/hero";
import Products from "../../components/products/products";
import Usp from "../../components/comp-usp/usp";
import Footer from "../../components/footer/footer"; //here we include folder and file names

const Home = () => {
  return (
    <div>
     <Hero/>
      <Products />
      <Usp />
      <Footer /> 
    </div>
  )
}

export default Home
