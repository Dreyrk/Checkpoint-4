import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import deck from "../assets/deck-timo-v2-48-x-205-noir-ao-scooter.jpg";
import bar from "../assets/protoBar.jpg";
import wheel from "../assets/scootWheel.png";

function ItemCarousel() {
  return (
    <div className="m-2">
      <Carousel autoPlay infiniteLoop showThumbs="" showStatus="">
        <div className="h-">
          <img src={bar} alt="product" />
          <p className="legend">Bar Proto Slayer</p>
        </div>
        <div>
          <img src={deck} alt="product" />
          <p className="legend">Deck Machin Truc</p>
        </div>
        <div>
          <img src={wheel} alt="product" />
          <p className="legend">Wheel 120mm truc bidule</p>
        </div>
      </Carousel>
    </div>
  );
}

export default ItemCarousel;
