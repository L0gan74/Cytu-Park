import React from "react";

import ShopBlock from "./SchopBlock";
import Skeleton from "./SchopBlock/Skeleton";

const Shop = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);

    fetch("https://6329da15d2c97d8c5272320b.mockapi.io/magazin")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
  }, []);

  return (
    <section className="shop">
      <div className="container">
        <div className="schop-block">
          <div className="schop-block__section-vse">
            <div className="schop-block__section-vse__top">
              <p>Все магазины</p>
              <img src="./img/paper-bags.png" alt="" />
            </div>
            <div className="schop-block__section-vse__bottom">
              <p>Показать на карте</p>
              <img src="./img/pinукаd 1.svg" alt="" />
            </div>
          </div>
          {loading
            ? [...new Array(5)].map((_ , index) => <Skeleton key={index} />)
            : items.map((obj) => <ShopBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </section>
  );
};

export default Shop;
