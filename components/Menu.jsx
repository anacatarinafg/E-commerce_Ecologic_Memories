import React, { useRef } from "react";
import Link from "next/link";

import { useStateContext } from "../context/StateContext";

import { AiOutlineCloseCircle } from "react-icons/ai";

const Menu = () => {
  const menuRef = useRef();
  const { setShowMenu } = useStateContext();

  return (
    <nav className="menu" ref={menuRef}>
      <div className="menu__button">
        <button
          className="cart__button"
          type="button"
          onClick={() => setShowMenu(false)}
        >
          <AiOutlineCloseCircle className="menu__exit" />
        </button>
      </div>
      <ul className="menu__list">
        <li className="menu__item">
          <Link href="/">
            <a className="menu__link">Homepage</a>
          </Link>
        </li>
        <li className="menu__item">
          <Link href="/shop">
            <a className="menu__link">Shop</a>
          </Link>
        </li>
        <li className="menu__item">
          <Link href="/about">
            <a className="menu__link">Sobre nós</a>
          </Link>
        </li>
        <li className="menu__item">
          <Link href="/contact">
            <a className="menu__link">Contacta-nos</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
