import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"; // Importing custom carousel styles
import web1 from "./Images/welcome.png";
import web2 from "./Images/welcome.png";
import web3 from "./Images/welcome.png";
import web4 from "./Images/welcome.png";
import Common from "./Common";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Common 
        name='Disfruta de nuestros frappes, cheesecakes y más'
        //imgsrc={[web1]} // Passing a single image to Common
        visit="/Service" 
        btname="Explorar Menú"
        style={{ padding: '20px 0', maxWidth: '100%', height: '500px', objectFit: 'cover' }}
      >
        <section className="hero-carousel">
          <Slider {...settings}>
            <div>
              <img src={web1} alt="Slide 1" className="img-fluid" />
            </div>
            <div>
              <img src={web2} alt="Slide 2" className="img-fluid" />
            </div>
            <div>
              <img src={web3} alt="Slide 3" className="img-fluid" />
            </div>
            <div>
              <img src={web4} alt="Slide 4" className="img-fluid" />
            </div>
          </Slider>
        </section>
      </Common>
    </>
  );
};

export default Home;