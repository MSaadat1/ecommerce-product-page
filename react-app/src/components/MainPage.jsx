import "../data.js";
import { imageGalleries, itemInformation } from "../data";
import "./style.css";
import { useState } from "react";
import { ImageGalleryPopUp } from "./ImageGalleryPopUp.jsx";
import { productImages } from "../data";
export function MainPage({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  setCartItems,
  // cartItems,
}) {
  const [currentImage, setCurrentImage] = useState(productImages[0]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const findItem = itemInformation.find((item) => item.id === 1);
  const findImg = imageGalleries.find((item) => item.id === 1);
  function handleImage() {
    setIsGalleryOpen(true);
  }
  function handleDeleteBtn() {
    setIsGalleryOpen(false);
  }
  function handleClick() {
    if (quantity > 0) {
      setCartItems((prev) => {
        return [
          ...prev,
          {
            product: findItem.title,
            subtitle: findItem.subtitle,
            image: findImg.url,
            quantity: quantity,
            price: findItem.price,
          },
        ];
      });
    }
  }
  function handleSwitch(id) {
    const findBigImg = productImages.find((img) => img.id === id);
    setCurrentImage(findBigImg);
  }
  function handleNext() {
    const currentIndex = productImages.findIndex(
      (img) => img.id === currentImage.id,
    );
    if (currentIndex === productImages.length - 1) {
      setCurrentImage(productImages[0]);
    } else {
      setCurrentImage(productImages[currentIndex + 1]);
    }
  }
  function handlePrev() {
    const currentIndex = productImages.findIndex(
      (img) => img.id === currentImage.id,
    );
    if (currentIndex === 0) {
      setCurrentImage(productImages[productImages.length - 1]);
    } else {
      setCurrentImage(productImages[currentIndex - 1]);
    }
  }
  return (
    <div className="main-container">
      <div className="image-galleries">
        <div className="big-image">
          <button className="gallery-prev" onClick={handlePrev}>
            ˂
          </button>
          <img onClick={handleImage} src={currentImage.url} alt="" />
          <button className="gallery-next" onClick={handleNext}>
            ˃
          </button>
        </div>

        {isGalleryOpen && (
          <div className="imageGalleryPopUp">
            <ImageGalleryPopUp
              currentImage={currentImage}
              handleDeleteBtn={handleDeleteBtn}
              handleSwitch={handleSwitch}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </div>
        )}

        <div className="galleries">
          <ul className="galleries-image">
            {imageGalleries.map((image) => (
              <li key={image.id}>
                <img src={image.url} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="contents">
        <div className="itemDescriptionContainer">
          {itemInformation.map((item) => (
            <div className="itemDescription">
              <p className="company">{item.company}</p>
              <h2 className="title">{item.title}</h2>
              <h2 className="subtitle">{item.subtitle}</h2>
              <p className="description">{item.description}</p>
              <div className="price-tag">
                <div className="price-amount">
                  <span className="price">${item.price}.00</span>
                  <span className="discount">{item.discount}%</span>
                </div>
                <p className="originalPrice">${item.originalPrice}.00</p>
              </div>
            </div>
          ))}
        </div>
        <div className="addItems">
          <div className="quantity">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <div className="addCart">
            <button onClick={handleClick}>
              <img
                className="addCartImg"
                src={`${import.meta.env.BASE_URL}images/icon-cart.svg`}
                alt="cart"
              />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
