import "./App.css";
import { Navbar } from "./components/Navbar";
import { MainPage } from "./components/MainPage";
import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  function increaseQuantity() {
    setQuantity(quantity + 1);
  }
  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  function handleDelete(id) {
    const deleteItem = cartItems.filter((item) => item.id !== id);
    setCartItems(deleteItem);
  }
  return (
    <>
      <div className="container">
        <div className="navbar">
          <Navbar
            cartItems={cartItems}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            handleDelete={handleDelete}
          />
          <hr className="navbar-hr"/>
        </div>
        <div className="mainContainer">
          <MainPage
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        </div>
      </div>
    </>
  );
}

export default App;
