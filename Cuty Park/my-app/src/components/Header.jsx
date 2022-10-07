import Categories from "./Categories";
import MenuBtn from "./MenuBtn";
import { Link } from "react-router-dom";
import Logo from "../components/img/logo.svg"
import Time from "../components/img/time.svg"
import Telegramm from "../components/img/telegramm.svg"
import Vk from "../components/img/vk.svg"
import Mesto from "../components/img/mesto.svg"


function Header() {
  return (
    <header>
      <div className="container">
        <nav className="header-top disfl">
          <div className="header-top__img disfl">
            <Link to="/">
            <div className="header-top__img-logo">
              <img src={Logo} alt="Логотип" />
            </div>
            </Link>
            <div className="header-top__img-social">
              <img src={Vk} alt="" />
            <img src={Telegramm} alt="" />
            </div>
          </div>
          <div className="header-top__place disfl">
            <img src={Mesto} alt="" />
            <p className="fntsz-15">г. Саранск, ул. Волгоградская, 71</p>
          </div>
          <div className="header-top__time disfl">
            <img src={Time} alt="" />
            <p className="fntsz-15">10:00-22:00</p>
          </div>
          <div className="header-top__btn">
            <button className="header-top__btn-left fntsz-15">Карта ТРЦ</button>
            <button className="header-top__btn-right fntsz-15">
              Подарочная карта
            </button>
          </div>
        </nav>
      </div>
      <div className="header-bottom">
        <Categories/>
      </div>
      <MenuBtn/>
    </header>
  );
}

export default Header;
