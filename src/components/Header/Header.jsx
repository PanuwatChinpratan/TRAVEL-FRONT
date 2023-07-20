import React, { useRef, useEffect, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";

const nav__links = [
  {
    path: "/home",
    display: "HOME",
  },
  {
    path: "/about",
    display: "ABOUT",
  },
  {
    path: "/tours",
    display: "TOURS",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    };
    window.addEventListener("scroll", stickyHeaderFunc);
    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="d-flex align-items-center gap-4 fixmobile">
            <div className="logo">
              <img src={logo} alt="anime" />
            </div>

            {/* Menu start */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* Menu end */}
            <div className="d-flex align-items-center d-flex">
              <div className="d-flex align-items-center gap-2">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn primary__btn">
                      <Link to="/login">LOGIN</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">REGISTER</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className="noob">
              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
