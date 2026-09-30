import "./style.css";

export function CartPopUps({ cartItems, handleDelete }) {
  return (
    <div className="popup-container">
      <h4>Cart</h4>
      <hr className="cart-hr"/>
      {cartItems.length === 0 ? (
        <div className="cart-empty-container">
          <p>Your Cart is Empty</p>
        </div>
      ) : (
        <div className="cart-popup-main">
          {cartItems.map((item) => (
            <div className="cart-popup-container">
              <img className="cart-popup-img" src={item.image} alt="" />
              <div className="cart-popup-items">
                <p>
                  {item.product} {item.subtitle}
                </p>
                <span>${item.price}.00</span>
                <span>x {item.quantity} = </span>
                <span className="totalOfPrice">
                  ${item.price * item.quantity}.00
                </span>
              </div>
              <div
                className="delete-item"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(item.id);
                }}
              >
                <img src="/images/icon-delete.svg" alt="" />
              </div>
            </div>
          ))}
          <button className="cart-btn">Check Out</button>
        </div>
      )}
    </div>
  );
}
