import React from "react";
import Link from "next/link";

// Importação do State
import { useStateContext } from "../context/StateContext";

// Importação dos Ícones
import { AiOutlineShopping } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";

// Importação do carrinho de compras
import { Cart } from "./";
import { Menu } from "./";
import { Favourites } from "./";

const Navbar = () => {
  const {
    showCart,
    setShowCart,
    showMenu,
    setShowMenu,
    showFavourites,
    setShowFavourites,
    totalQuantity,
    totalFavourites,
  } = useStateContext();

  return (
    <nav className="navbar">
      <h2 className="navbar__logotype">
        <Link href="/" className="navbar__logotext">
          Ecologic memories
        </Link>
      </h2>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link href="/">
            <a className="navbar__link">Homepage</a>
          </Link>
        </li>
        <li className="navbar__item">
          <Link href="/shop">
            <a className="navbar__link">Shop</a>
          </Link>
        </li>
        <li className="navbar__item">
          <Link href="/about">
            <a className="navbar__link">Sobre nós</a>
          </Link>
        </li>
        <li className="navbar__item">
          <Link href="/contact">
            <a className="navbar__link">Contacta-nos</a>
          </Link>
        </li>
      </ul>
      <div className="navbar__icons">
        <button
          type="button"
          className="navbar__favourites"
          onClick={() => setShowFavourites(true)} // it's set to TRUE because we want to open it;
        >
          <MdFavoriteBorder></MdFavoriteBorder>
          <span className="navbar__cart__counter">{totalFavourites}</span>
        </button>
        {/* We only want to show the favourites when the show favourites is set to true */}
        {showFavourites && <Favourites />}

        <button
          type="button"
          className="navbar__cart"
          onClick={() => setShowCart(true)} // it's set to TRUE because we want to open it;
        >
          <AiOutlineShopping></AiOutlineShopping>
          <span className="navbar__cart__counter">{totalQuantity}</span>
        </button>
        {/* We only want to show the cart when the show cart is set to true */}
        {showCart && <Cart />}

        <button
          type="button"
          className="navbar__menu"
          onClick={() => setShowMenu(true)} // it's set to TRUE because we want to open it;
        >
          <FaHamburger className="navbar__hamburger"></FaHamburger>
        </button>
        {showMenu && <Menu />}
      </div>
    </nav>
  );
};

export default Navbar;
