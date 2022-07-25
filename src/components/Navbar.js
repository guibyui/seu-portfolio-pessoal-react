import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button className="mobile-menu-icon" onClick={() => setOpen(!isOpen)}>
        {isOpen ? <FaRegWindowClose /> : <FaBars />}
      </button>
      <div
        className={
          isOpen ? "inset-0 fixed z-10 bg-black opacity-50" : "opacity-0"
        }
        onClick={() => setOpen(false)}
      ></div>
      <nav className={isOpen ? "nav-opened" : "nav"}>
        <ul className={isOpen ? "nav__list" : "nav_links"}>
          <li className="nav__item">
            <Link
              to="home"
              smooth={true}
              duration={100}
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="services"
              smooth={true}
              duration={100}
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              Meus Serviços
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="about"
              smooth={true}
              duration={100}
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              Sobre Mim
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="work"
              smooth={true}
              duration={100}
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              Meus Projetos
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="footer"
              smooth={true}
              duration={100}
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              Vamos Conversar!
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
