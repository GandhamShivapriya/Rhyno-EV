import React from "react";
import "./products.css";
import blue from "../../assets/blue.png";
import black from "../../assets/black.png";
import red from "../../assets/red.png";
const Products = () => {
  return (
    <>
    <h1 className="model">Our Models Include </h1>
    <div className="box">
      <div className="card" >
        <div className="img-cont">
          <img src={red} className="card-img-top" alt="..." />
          <div className="overlay">
            <ul className="text">
              <li>Battery-1.8Kwh</li>
              <li>Charging time-3 hours (12A)</li>
              <li>Max range(@full speed)-70 km</li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">SEO3 Lite</h5>
          <a href="/ Product_com#product1" className="btn btn-secondary">
            Explore More
          </a>
        </div>
      </div>
      <div className="card " >
        <div className="img-cont">
          <img src={blue} className="card-img-top" alt="..." />
          <div className="overlay">
            <ul className="text">
              <li>Battery-2.7Kwh</li>
              <li>Charging time-4 hours (12A)</li>
              <li>Max range(@full speed)-90 km</li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">SEO3</h5>
          <a href="/ Product_com#product2"  className="btn btn-secondary">
            Explore More
          </a>
        </div>
      </div>

      <div className="card" >
        <div className="img-cont">
          <img src={black} className="card-img-top" alt="..." />
          <div className="overlay">
            <ul className="text">
              <li>Battery-2.7Kwh</li>
              <li>Charging time-4 hours (12A)</li>
              <li>Max range(@full speed)-80 km</li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">SEO3 Max</h5>
          <a href="/ Product_com#product3"  className="btn btn-secondary">
            Explore More
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Products;
