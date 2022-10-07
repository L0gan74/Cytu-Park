import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const regulationsList = [
    "Правила ТРЦ",
    "Арендаторам",
    "Рекламные услуги",
    "Контакты",
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-contact">
          <p>г. Саранск, ул. Волгоградская, 71</p>
          <p>Часы работы с 10:00 до 22:00</p>
          <p>+7(909)000-00-00</p>
        </div>
        <div className="footer-regulations">
          <ul>
            {regulationsList.map((value, index) => (
              <Link to="*">
                <li key={index}>{value}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
