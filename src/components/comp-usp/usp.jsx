import React from "react";
import "./usp.css";
import bike_battery from "../../assets/bike_battery.png";
import wide_tyres from "../../assets/wide_tyres.png";
import range from "../../assets/range.jpg";
import extra_ord from "../../assets/extra_ord.png";
import group from "../../assets/group.png";

const Usp = () => {
  return (
    <div className="move" >
      <div id="carouselExampleCaptions" className="carousel slide ">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={4}
            aria-label="Slide 5"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bike_battery} className="d-block w-100 "  alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>LFP Battery</h5>
              <p>
                Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
                renowned for their safety features—eliminating the risk of fire
                associated with other Lithium batteries. These batteries boast a
                broader temperature range, ideal for the diverse Indian climate.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={wide_tyres} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block info">
              <h5>Wider tyres</h5>
              <p>
                Now, say goodbye to skidding and embrace the leaning turns!
                Featuring first-of-its-kind, 9.5-inch wider tyres that make this
                machine an enormous beast that ensures stability on different
                terrains such as wet roads, mud, and sand.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={range} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Range prediction</h5>
              <p>
                Many budget-friendly electric scooters overlook this crucial
                feature, causing riders to experience range anxiety. With Rhyno,
                you can ride with peace of mind, thanks to the scooter providing
                precise information about the remaining battery.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={extra_ord} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Extraordinery Experience</h5>
              <p>
                Rhyno is more than just a mode of transportation. It is an
                experience of sheer comfort and style! A seamless fusion of
                minimalism, sophistication, and a touch of masculinity!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={group} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Rugged and simple Design</h5>
              <p>
                We’ve had enough of the EVs looking and feeling like fragile
                plastic toys. Often fading out and shamelessly breaking in minor
                accidents, ending up spending weeks and months at service
                stations for complex repairs.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Usp;
