import React, { useEffect } from "react";
import "../css/home.css";
import home from "../img/homepage-removebg-preview.png";
import { Link } from "react-router-dom";
import performancelogo from "../img/performance-logo.png";
import adidas from "../img/adidas.png";
import puma from "../img/puma.png";
import nike from "../img/nike.png";
import hoodrichexported from "../img/hoodrichexported.png";
import vans from "../img/vans.png";
import ea from "../img/ea.png";
import t from "../img/t.png";
import jordanexported from "../img/jordanexported.png";
import the from "../img/the.png";
import { shops } from "../Data/db";
import { TopPicks } from "../Data/db";
import imginfo from "../img/img-info.png";
import imginfo2 from "../img/img-info2.png";
import Marquee from "react-fast-marquee";
import Scrollreveal from "scrollreveal";
function Home() {
  useEffect(() => {
    let src = Scrollreveal({
      origin: "top",
      distance: "60px",
      duration: 1000,
      delay: 400,
    });
    src.reveal(`.text-home`, {
      origin: "left",
    });

    src.reveal(`.button-shop , .Brand-title,.tile-Picks `, {
      origin: "left",
    });
    src.reveal(`.details`, {
      origin: "bottom",
    });
    // src.reveal(`.img-info`, {

    //   origin: "right",

    // });

    src.reveal(`.Top-Picks-cards `, {
      origin: "top",
    });

    src.reveal(`.home-img , .Brands-You-Love-imges , footer`, {
      origin: "bottom",
    });
  }, []);

  return (
    <div>
      <div className="home-page">
        <div className="text-home">
          <h1>Find the Best Fishion Style for you</h1>
        </div>

        <div className="home-img ">
          <img src={home} alt="" />
        </div>
      </div>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.{" "}
        </p>
        <Link className="button-shop" to="/Shop">
          Shop Now
        </Link>
      </div>

      {/* Brands You Love */}
      <div className="Brands-You-Love">
        <h1 className="Brand-title">Brands You Love</h1>
        <br />
        <br />
        <div className="Brands-You-Love-imges">
          <img src={performancelogo} alt="" />
          <img src={adidas} alt="" />
          <img src={puma} alt="" />
          <img src={nike} alt="" />
          <img src={vans} alt="" />
          <img src={hoodrichexported} alt="" />
          <img src={ea} alt="" />
          <img src={t} alt="" />
          <img src={jordanexported} alt="" />
          <img src={the} alt="" />
        </div>
      </div>

      {/* shopings */}
      <div className="shopings">
        {shops.map((shop) => (
          <div>
            <div className="shoping-cards">
              <img className="shoping-card" src={shop.image} alt="" srcset="" />
              <h2 className="text-shoping">{shop.title}</h2>
            </div>
            <div className="buttons-cards">
              <div className="button-card">
                <button className="button-Link">
                  {" "}
                  <Link className="Link" to="/Shop">
                    {shop.title2}
                  </Link>
                </button>
                <button className="button-Link">
                  {" "}
                  <Link className="Link" to="/Shop">
                    {shop.title3}
                  </Link>
                </button>
                <button className="button-Link">
                  {" "}
                  <Link className="Link" to="/Shop">
                    {shop.title4}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="Top-Picks">
        <h1 className="tile-Picks">Top Picks</h1>
        <br />
        <br />

        <div className="Top-Picks-cards">
          <Marquee behavior="" direction="left" className="inner-carousel">
            {TopPicks.map((TopPick) => (
              <Link to="/Shop" className="link-cards ">
                <div className="Top-Picks-card">
                  <div className="card-img" id="card-img">
                    <img src={TopPick.image} alt="" />
                  </div>
                  <div className="card-title">
                    <h4>{TopPick.title}</h4>
                    <div className="star">
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <i class="ri-star-fill"></i>
                      <div className="shop-icon">
                        <svg
                          width="41"
                          height="40"
                          viewBox="0 0 41 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="20.1353" cy="20" r="20" fill="#D9D9D9" />
                          <path
                            d="M25.3853 16.8889V12.4444C25.3853 11.2657 24.8848 10.1352 23.994 9.30175C23.1032 8.46825 21.895 8 20.6353 8C19.3755 8 18.1673 8.46825 17.2765 9.30175C16.3857 10.1352 15.8853 11.2657 15.8853 12.4444V16.8889M12.3228 14.6667H28.9478L30.1353 28H11.1353L12.3228 14.6667Z"
                            stroke="black"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="price">
                      <h5>${TopPick.price}</h5>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Marquee>
        </div>
      </div>
      {/* Subscribe-To-Our-Newsletter */}
      <div className="Subscribe-To-Our-Newsletter">
        <div className="Subscribe-To-Our-Newsletter-info">
          <h1>Subscribe To Our Newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin consectetur adipiscing consectetur{" "}
          </p>
          <input
            type="text"
            className="input-info"
            placeholder="michael@ymail.com"
          />
          <br />
          <button type="button" className="button-info">
            Subscribe Now
          </button>
        </div>

        <div className="img-info2">
          <img src={imginfo2} alt="" />
        </div>

        <div className="img-info">
          <img src={imginfo} alt="" />
        </div>
      </div>
      {/* footer */}
      <footer>
        <div className="footer-Social-media">
          <h1>Clothes store</h1>
          <div className="footer-icon ">
            <i className="ri-twitter-fill "></i>
            <i className="ri-facebook-box-fill"></i>
            <i className="ri-instagram-line"></i>
          </div>
        </div>

        <hr className="line" />
        <div className="footer2">
          <h6>
            © 2024 <b>Clothes store.</b> All Rights Reserved.
          </h6>
        </div>
      </footer>
    </div>
  );
}

export default Home;
