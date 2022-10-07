import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MenuBtn() {
  return (
    <div className="burger">
        <Navbar className="burger-menu" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">логотип</Navbar.Brand>
          <Navbar.Toggle aria-controlsF="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">
                <div className="header-top__place disfl">
                  <img src="./img/mesto.svg" alt="" />
                  <p className="fntsz-15">г. Саранск, ул. Волгоградская, 71</p>
                </div>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <div className="header-top__time disfl">
                  <img src="./img/time.svg" alt="" />
                  <p className="fntsz-15">10:00-22:00</p>
                </div>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <div className="header-top__btn">
                  <button className="header-top__btn-left fntsz-15">
                    Карта ТРЦ
                  </button>
                  <button className="header-top__btn-right fntsz-15">
                    Подарочная карта
                  </button>
                </div>
              </Nav.Link>
              <NavDropdown title="Все" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Магазины</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Развлечения
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Еда</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Услуги</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Новости</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">События</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Мобильное приложение
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
}

export default MenuBtn;
