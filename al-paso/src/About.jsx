import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"; // Importing custom carousel styles
import web1 from "./Images/about.png";
import web2 from "./Images/welcome.png";
import web3 from "./Images/welcome.png";
import web4 from "./Images/welcome.png";
import Common from "./Common";

const About = () =>{

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return(
    <>
    <Common
      name='Bienvenido a nuestra página'
      //imgsrc={[web1, web2, web3, web4]} // Passing multiple images
      visit="https://wa.me/+593990390020" // Updated to WhatsApp link
      btname="Contáctanos"
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
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <h2 className="text-center mb-4">Sobre Al Paso D’Casa</h2>
            
            <div className="row">
              <div className="col-md-6">
                <h4 className="mb-3">Nuestra Historia</h4>
                <p>
                  Al Paso D’Casa ha estado sirviendo a la comunidad desde 2015 con excelencia y dedicación. 
                  Creemos que cada cliente merece productos frescos y deliciosos en un ambiente acogedor.
                </p>
                <p>
                  Nuestro equipo está comprometido a ofrecer los mejores frappes, cheesecakes, burritos, 
                  milkshakes y más, utilizando ingredientes de alta calidad y recetas únicas.
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="mb-3">¿Por qué elegirnos?</h4>
                <ul style={{listStyle: 'none', paddingLeft: 0}}>
                  <li className="mb-2">✓ Ingredientes frescos y de calidad</li>
                  <li className="mb-2">✓ Variedad de opciones deliciosas</li>
                  <li className="mb-2">✓ Ambiente cómodo y familiar</li>
                  <li className="mb-2">✓ Precios accesibles</li>
                  <li className="mb-2">✓ Servicio personalizado para cada cliente</li>
                  <li className="mb-2">✓ ¡Ven y disfruta con nosotros!</li>
                </ul>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-4 text-center mb-4">
                <h5>100+</h5>
                <p>Clientes satisfechos</p>
              </div>
              <div className="col-md-4 text-center mb-4">
                <h5>8+ Años</h5>
                <p>En el negocio</p>
              </div>
              <div className="col-md-4 text-center mb-4">
                <h5>50+</h5>
                <p>Opciones deliciosas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
export default About;