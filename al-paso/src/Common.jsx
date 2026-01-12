import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css"; // Reusing the hover effect from Card.css

const Common = ({ name, imgsrc, visit, btname, children }) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{name}</h1>
                  <NavLink to={visit} className="btn btn-primary">
                    {btname}
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img d-flex flex-wrap">
                  {imgsrc &&
                    imgsrc.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        className="img-fluid mb-3 me-4 compact-card" // Added hover effect class
                        alt={`header-${index}`}
                        style={{ maxWidth: "48%" }} // Ensures images are displayed side by side
                      />
                    ))}
                  {children && <div className="w-100">{children}</div>} {/* Render additional content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;