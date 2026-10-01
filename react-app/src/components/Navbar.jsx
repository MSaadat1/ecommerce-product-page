import "./style.css";
import "../data.js";
import { navItems } from "../data.js";
import { CartPopUps } from "./CartPopUps.jsx";
import { useState } from "react";

export function Navbar({ cartItems, isCartOpen, setIsCartOpen, handleDelete }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleOpenMenu() {
    setIsMenuOpen(true);
  }
  function handleCloseMenu() {
    setIsMenuOpen(false);
  }
  return (
    <>
      <div className="navbar-container">
        <div className="logo-navlist">
          <img
            onClick={handleOpenMenu}
            className="menu-icon"
            src={`${import.meta.env.BASE_URL}images/icon-menu.svg`}
            alt=""
          />
          {isMenuOpen && (
            <>
              <div className="menu-overlay"></div>
              <div className="navlist-items-drop-container">
                <img
                  onClick={handleCloseMenu}
                  src={`${import.meta.env.BASE_URL}images/icon-close.svg`}
                  alt=""
                />
                <ul className="navlist-items-drop">
                  {navItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
          <div className="logo-container">
            <img src={`${import.meta.env.BASE_URL}images/logo.svg`} alt="" />
          </div>
          <div className="navlists-container">
            <ul className="navlist-items">
              {navItems.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cart-container">
          <div className="cart-img" onClick={() => setIsCartOpen(!isCartOpen)}>
            {cartItems.length === 1 && (
              <span className="quantity-on-cart">{cartItems[0].quantity}</span>
            )}
            <img
              src={`${import.meta.env.BASE_URL}images/icon-cart.svg`}
              alt=""
            />
            {isCartOpen && (
              <CartPopUps cartItems={cartItems} handleDelete={handleDelete} />
            )}
          </div>
          <div className="user-img">
            <img
              src={`${import.meta.env.BASE_URL}images/image-avatar.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
