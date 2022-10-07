import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    "Все",
    "Магазины ",
    "Развлечения",
    "Еда",
    "Услуги",
    "Новости",
    "События",
    "Мобильное приложение",
  ];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className=".header-bottom">
      <div class="container">
        <nav class="header-bottom__list">
          <ul>
            {categories.map((value, index) => (
              <Link to="*">
              <li
                key={index}
                onClick={() => onClickCategory(index)}
                className={activeIndex === index ? "active" : ""}
              >
                {value}
              </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Categories;
