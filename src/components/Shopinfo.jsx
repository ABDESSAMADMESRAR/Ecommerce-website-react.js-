import "../css/Shopinfo.css";
import Payment from "../img/Payment-Options.png";
import prod from "../img/div.prod__form-buttons.png";
import Counter from "../img/Counter.png";
import Button from "../img/Button.png";
import Item from "../img/Item.png";
import Item2 from "../img/Item2.png";
import { useParams } from "react-router-dom";

import { Allproducts } from "../Data/db";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Scrollreveal from "scrollreveal";
import { useEffect, useState } from "react";
function Shopinfo() {
  const [Quantity, setQuantity] = useState(1);

  const [Changee, setchange] = useState("M");
  const [Change, setchang] = useState();
  const [firstImage, setFirstImage] = useState(null);

  const myfunction = (sallme) => {
    setchang(sallme.target.src);
  };

  const changef = (e) => {
    setchange(e.target.value);
  };

  useEffect(() => {
    let src = Scrollreveal({
      origin: "top",
      distance: "60px",
      duration: 1000,
      delay: 400,
    });
    src.reveal(`.title , .Button , .info-item  `, {
      origin: "top",
    });

    src.reveal(`.price , .shop-size , .info-prod , .info-Item2 `, {
      origin: "left",
    });
    src.reveal(`footer , .Counter , .conut-button , .info-Payment , .pr `, {
      origin: "bottom",
    });
  }, []);

  const { idsh } = useParams();
  const itemsfiltres = Allproducts.filter((produit) => {
    return produit.id === parseInt(idsh);
  });
  useEffect(() => {
    if (itemsfiltres.length > 0) {
      setFirstImage(itemsfiltres[0].image);
    }
  });
  return (
    <div>
      <div id="warning">
        {itemsfiltres.map((pr) => {
          return (
            <div>
              <div className="imagers-home">
                <div className="img-home-info">
                  <Zoom>
                    <img className="pr" src={Change || pr.image} alt="" />
                  </Zoom>

                  <h3 className="title">{pr.title}</h3>
                  <img className="Button" src={Button} alt="" />
                  <p className="price">${pr.price}</p>
                </div>
                <img className="Counter" src={Counter} alt="" />

                <div className="img-home-other-info">
                  <img src={pr.image2} alt="" onClick={myfunction} />
                  <img src={pr.image3} alt="" onClick={myfunction} />
                  <img src={pr.image4} alt="" onClick={myfunction} />
                  <img src={pr.image5} alt="" onClick={myfunction} />
                </div>
                <div className="shop-size">
                  <h3>Size: {Changee}</h3>
                  <button
                    value="M"
                    className={Changee === "M" ? "activationbutton" : ""}
                    onClick={changef}
                  >
                    M
                  </button>
                  <button
                    value="L"
                    className={Changee === "L" ? "activationbutton" : ""}
                    onClick={changef}
                  >
                    L
                  </button>
                  <button
                    value="XL"
                    className={Changee === "XL" ? "activationbutton" : ""}
                    onClick={changef}
                  >
                    XL
                  </button>
                  <button
                    value="XXL"
                    className={Changee === "XXL" ? "activationbutton" : ""}
                    onClick={changef}
                  >
                    XXL
                  </button>
                </div>

                <div className="conut-button">
                  <button
                    onClick={() => setQuantity(Quantity + 1)}
                    className="Quantity"
                  >
                    +
                  </button>
                  <span className="count">{Quantity}</span>
                  <button
                    onClick={() => {
                      if (Quantity > 0) {
                        setQuantity(Quantity - 1);
                      }
                    }}
                    className="Quantity"
                  >
                    -
                  </button>

                  <div className="add-cart">
                    <button
                      id="cart"
                      onClick={() => {
                        pr.key = Quantity;
                      }}
                    >
                      Add to cart
                    </button>
                    <p></p>
                  </div>
                </div>
                <img className="info-prod" src={prod} alt="" />
                <img className="info-item" src={Item} alt="" />
                <img className="info-Item2" src={Item2} alt="" />
                <img className="info-Payment" src={Payment} alt="" />
              </div>
            </div>
          );
        })}
      </div>

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

export default Shopinfo;
