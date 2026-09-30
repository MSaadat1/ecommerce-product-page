import "./style.css";
import { imageGalleries } from "../data";

export function ImageGalleryPopUp({ currentImage, handleDeleteBtn, handleSwitch, handleNext, handlePrev }) {
  return (
    <>
      <div className="imageGalleries">
        <button onClick={handleDeleteBtn}>x</button>
        <div className="big-images">
          <img onClick={handlePrev} className="arrow-previous" src="./images/icon-previous.svg" alt="" />
          <img src={currentImage.url} alt="" />
          <img onClick={handleNext} className="arrow-next" src="./images/icon-next.svg" alt="" />
        </div>
        <ul className="thumbnail-list">
          {imageGalleries.map((img) => (
            <li className="thumbnail-items">
              <img onClick={()=> handleSwitch(img.id)} src={img.url} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
