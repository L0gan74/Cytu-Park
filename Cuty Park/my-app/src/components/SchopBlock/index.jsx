import React from "react";
import { Link } from "react-router-dom";

function ShopBlock(props) {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className="schop-block__section" onClick={() => setShow(!show)}>
        <div className="schop-block__section-img">
          <img src={props.imageUrl} alt="" />
        </div>
        <div className="schop-block__section-text">
          <p className="hashtag">{props.hashtag}</p>
          <p className="name-shop">{props.nameShop}</p>
          <p className="shop-description">{props.shopDescription}</p>
          <div className="schop-block__section-text__textlocation disfl">
            <p>{props.floor} этаж</p>
            <Link to="*">
              <p className="underlining">Показать на карте</p>
            </Link>
          </div>
        </div>
      </div>
      {show && (
        <div className="modal-block">
          <div className="modal-block__top">
            <p>Магазины/Одежда/Bershka</p>
            <button onClick={() => setShow(!show)}>×</button>
          </div>
          <div className="modal-block__img">
            <img src={props.imageUrl} alt=""></img>
          </div>
          <div className="modal-block__description">
            <div className="block__description-left">
              <p className="name-shop">{props.nameShop}</p>
              <p className="shop-description">{props.title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShopBlock;
