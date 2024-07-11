import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import "../css/header.css";
import { Allproducts } from "../Data/db";

import { useState, useEffect, useRef } from "react";
import Scrollreveal from "scrollreveal";

function Header() {
  const [toggle, settoggle] = useState(false);
  const [Cards, setcards] = useState([]);

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      settoggle(false);
    }
  };

  useEffect(() => {
    const shoped = Allproducts.filter((item) => {
      return item.key > 0;
    });
    setcards(shoped);

    let src = Scrollreveal({
      origin: "top",
      distance: "60px",
      duration: 1000,
      delay: 400,
    });
    src.reveal(`.navbar `, {
      origin: "top",
    });

    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);

  return (
    <div>
      <nav className="navbar">
        <svg
          onClick={() => settoggle(!toggle)}
          className="meun"
          width="49"
          height="42"
          viewBox="0 0 49 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 14.825H47M2 27.175H47M2 40H47M2 2H47"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>

        <div className="logo">Clothes store</div>

        <NavLink className="link" to="/">
          Home{" "}
        </NavLink>
        <NavLink className="link" to="/Shop">
          Shop
        </NavLink>
        <NavLink className="link" to="/About">
          About
        </NavLink>
        <NavLink className="link" to="/Contact-us">
          Contact us
        </NavLink>

        <div>
          <NavLink className="Impressiveproduct" to="/Impressiveproduct">
            <svg
              className="cart"
              width="36"
              height="36"
              viewBox="0 0 45 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.19672 9.57362C3.50028 10.3895 2.94782 11.3582 2.57091 12.4243C2.194 13.4903 2 14.6329 2 15.7868C2 16.9407 2.194 18.0833 2.57091 19.1494C2.94782 20.2155 3.50028 21.1841 4.19672 22L17 37L29.8033 22C31.2098 20.3522 32 18.1172 32 15.7868C32 13.4564 31.2098 11.2215 29.8033 9.57362C28.3968 7.92577 26.4891 7.00002 24.5 7.00002C22.5109 7.00002 20.6032 7.92577 19.1967 9.57362L17 12.1472L14.8034 9.57362C14.1069 8.75768 13.2801 8.11044 12.3702 7.66886C11.4602 7.22728 10.485 7 9.50004 7C8.51512 7 7.53985 7.22728 6.6299 7.66886C5.71996 8.11044 4.89316 8.75768 4.19672 9.57362Z"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="32.5" cy="12.5" r="12.5" fill="#5A37E8" />
            </svg>
          </NavLink>
          <span>0</span>
          <NavLink to="/Shoppingcart">
            <svg
              className="heart"
              width="36"
              height="36"
              viewBox="0 0 47 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5 18.3333V11.6667C24.5 9.89856 23.7098 8.20286 22.3033 6.95262C20.8968 5.70238 18.9891 5 17 5C15.0109 5 13.1032 5.70238 11.6967 6.95262C10.2902 8.20286 9.5 9.89856 9.5 11.6667V18.3333M3.875 15H30.125L32 35H2L3.875 15Z"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="34.5" cy="12.5" r="12.5" fill="#5A37E8" />
            </svg>
          </NavLink>
          <span>{Cards.length}</span>
        </div>
      </nav>
      <nav
        ref={dropdownRef}
        className={toggle ? "navbarmenu show-meun" : "navbarmenu"}
      >
        <svg
          onClick={() => settoggle(!toggle)}
          className="close"
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M335.147 176.853C333.164 174.854 330.804 173.266 328.205 172.183C325.605 171.1 322.816 170.543 320 170.543C317.184 170.543 314.396 171.1 311.796 172.183C309.196 173.266 306.837 174.854 304.854 176.853L256 225.92L207.147 176.853C203.13 172.836 197.681 170.579 192 170.579C186.319 170.579 180.871 172.836 176.854 176.853C172.836 180.87 170.58 186.319 170.58 192C170.58 197.681 172.836 203.129 176.854 207.146L225.92 256L176.854 304.853C174.854 306.836 173.267 309.196 172.184 311.795C171.101 314.395 170.543 317.183 170.543 320C170.543 322.816 171.101 325.604 172.184 328.204C173.267 330.804 174.854 333.163 176.854 335.146C178.837 337.146 181.196 338.733 183.796 339.816C186.396 340.899 189.184 341.457 192 341.457C194.816 341.457 197.605 340.899 200.205 339.816C202.804 338.733 205.164 337.146 207.147 335.146L256 286.08L304.854 335.146C306.837 337.146 309.196 338.733 311.796 339.816C314.396 340.899 317.184 341.457 320 341.457C322.816 341.457 325.605 340.899 328.205 339.816C330.804 338.733 333.164 337.146 335.147 335.146C337.146 333.163 338.734 330.804 339.817 328.204C340.9 325.604 341.457 322.816 341.457 320C341.457 317.183 340.9 314.395 339.817 311.795C338.734 309.196 337.146 306.836 335.147 304.853L286.08 256L335.147 207.146C337.146 205.163 338.734 202.804 339.817 200.204C340.9 197.604 341.457 194.816 341.457 192C341.457 189.183 340.9 186.395 339.817 183.795C338.734 181.196 337.146 178.836 335.147 176.853ZM406.827 105.173C387.148 84.7976 363.607 68.5454 337.58 57.3648C311.552 46.1842 283.559 40.2991 255.232 40.053C226.906 39.8068 198.815 45.2045 172.597 55.9311C146.379 66.6577 122.56 82.4984 102.529 102.529C82.4989 122.559 66.6582 146.378 55.9316 172.596C45.205 198.814 39.8073 226.906 40.0535 255.232C40.2996 283.558 46.1847 311.552 57.3653 337.579C68.5459 363.607 84.798 387.147 105.174 406.826C124.853 427.202 148.393 443.454 174.421 454.635C200.448 465.815 228.442 471.7 256.768 471.947C285.094 472.193 313.186 466.795 339.404 456.068C365.622 445.342 389.441 429.501 409.471 409.471C429.502 389.44 445.342 365.621 456.069 339.403C466.795 313.185 472.193 285.094 471.947 256.767C471.701 228.441 465.816 200.448 454.635 174.42C443.455 148.393 427.202 124.852 406.827 105.173ZM376.747 376.746C348.844 404.681 312.118 422.076 272.828 425.969C233.537 429.862 194.112 420.012 161.27 398.096C128.428 376.181 104.2 343.556 92.7143 305.781C81.2288 268.005 83.1961 227.416 98.2811 190.928C113.366 154.441 140.635 124.312 175.443 105.676C210.251 87.0392 250.444 81.0478 289.174 88.7224C327.904 96.3969 362.775 117.262 387.845 147.764C412.916 178.266 426.636 216.517 426.667 256C426.743 278.427 422.37 300.647 413.801 321.373C405.233 342.099 392.638 360.92 376.747 376.746Z"
            fill="black"
          />
        </svg>

        <div className="logo2">Clothes store</div>

        <NavLink className="link" to="/">
          Home{" "}
        </NavLink>
        <NavLink className="link" to="/Shop">
          Shop
        </NavLink>
        <NavLink className="link" to="/About">
          About
        </NavLink>
        <NavLink className="link" to="/Contact-us">
          Contact us
        </NavLink>

        <div className="icons">
          <NavLink className="Impressiveproduct" to="/Impressiveproduct">
            <svg
              className="cart"
              width="36"
              height="36"
              viewBox="0 0 45 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.19672 9.57362C3.50028 10.3895 2.94782 11.3582 2.57091 12.4243C2.194 13.4903 2 14.6329 2 15.7868C2 16.9407 2.194 18.0833 2.57091 19.1494C2.94782 20.2155 3.50028 21.1841 4.19672 22L17 37L29.8033 22C31.2098 20.3522 32 18.1172 32 15.7868C32 13.4564 31.2098 11.2215 29.8033 9.57362C28.3968 7.92577 26.4891 7.00002 24.5 7.00002C22.5109 7.00002 20.6032 7.92577 19.1967 9.57362L17 12.1472L14.8034 9.57362C14.1069 8.75768 13.2801 8.11044 12.3702 7.66886C11.4602 7.22728 10.485 7 9.50004 7C8.51512 7 7.53985 7.22728 6.6299 7.66886C5.71996 8.11044 4.89316 8.75768 4.19672 9.57362Z"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="32.5" cy="12.5" r="12.5" fill="#5A37E8" />
            </svg>
          </NavLink>
          <span></span>

          <NavLink to="/Shoppingcart">
            <svg
              className="heart"
              width="36"
              height="36"
              viewBox="0 0 47 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5 18.3333V11.6667C24.5 9.89856 23.7098 8.20286 22.3033 6.95262C20.8968 5.70238 18.9891 5 17 5C15.0109 5 13.1032 5.70238 11.6967 6.95262C10.2902 8.20286 9.5 9.89856 9.5 11.6667V18.3333M3.875 15H30.125L32 35H2L3.875 15Z"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="34.5" cy="12.5" r="12.5" fill="#5A37E8" />
            </svg>
          </NavLink>
          <span>{Cards.length}</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
