import React, { useEffect, useState } from "react";
import "../css/Shoppingcart.css";
import { Allproducts } from "../Data/db";

function Shoppingcart() {
  const [produits, serProduits] = useState([]);

  useEffect(() => {
    const shoped = Allproducts.filter((item) => {
      return item.key > 0;
    });
    serProduits(shoped);
  }, []);
  const removeProduct = (key) => {
    serProduits((currentItems) =>
      currentItems.filter((item) => item.key !== key)
    );
  };
  return (
    <div>
      <div>
        <h2 className="Shoppingcart"> Shoppingcart</h2>
        <br />
        <br />
        <br />

        <div id="shoped">
          {produits.map((item) => {
            return (
              <>
                <table class="table" id="table" md={2} xs={1} lg={3}>
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="col-5"
                        style={{ background: "  #e9e9e9" }}
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="col-3"
                        style={{ background: "  #e9e9e9" }}
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="col-2"
                        style={{ background: "  #e9e9e9" }}
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="col-2"
                        style={{ background: "  #e9e9e9" }}
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th
                        className="img-pr"
                        scope="row"
                        style={{ background: "  #e9e9e9" }}
                      >
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                        <button onClick={() => removeProduct(item.key)}>
                          Remove
                        </button>
                      </th>
                      <td style={{ background: "  #e9e9e9" }}>
                        {" "}
                        <h1>{item.price}</h1>
                      </td>
                      <td style={{ background: "  #e9e9e9" }}>
                        {" "}
                        <h3>{item.key}</h3>
                      </td>

                      <td className="total" style={{ background: "  #e9e9e9" }}>
                        ${item.price * item.key}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shoppingcart;
