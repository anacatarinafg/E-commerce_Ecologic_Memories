import React, { useRef } from "react";
import Link from "next/link";

import {
  AiOutlineCloseCircle,
  AiOutlineShopping,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { IoIosExit } from "react-icons/io";

// Importação do State;
import { useStateContext } from "../context/StateContext";

// Importação do urlFor para as imagens;
import { urlFor } from "../lib/client";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantity,
    addedProducts,
    setShowCart,
    choseAddedProductQuantity,
    onRemove,
  } = useStateContext(); // getting the data from our state;

  return (
    <div className="cart" ref={cartRef}>
      <div className="cart__box">
        <button
          className="cart__button"
          type="button"
          onClick={() => setShowCart(false)}
        >
          <IoIosExit className="cart__close" />
        </button>
        <p className="cart__headline">
          O teu carrinho
          <span className="cart__quantity">({totalQuantity})</span>
        </p>

        {/* Div that will show if there's no products currently in the cart */}
        {addedProducts.length < 1 && (
          <div className="cart__empty">
            <AiOutlineShopping className="cart__icon" />
            <p className="cart__empty--text">
              Parece que não adicionaste nenhum produto ao carrinho.
            </p>

            <Link href="/shop">
              <button
                className="cart__goShopping"
                type="button"
                onClick={() => setShowCart(false)}
              >
                Ir para a <span>loja</span>
              </button>
            </Link>
          </div>
        )}

        {/* Div that contains the products added to the cart */}
        <div className="cart__products">
          {addedProducts.length >= 1 &&
            addedProducts?.map((products) => (
              <div
                className="cart__product"
                key={products._id}
                id={products._id}
              >
                <img
                  src={urlFor(products?.image[0])}
                  alt={products.name}
                  className="cart__image"
                ></img>
                <div>
                  <button
                    type="button"
                    className="cart__removeItem"
                    onClick={() => onRemove(products)}
                  >
                    <AiOutlineCloseCircle></AiOutlineCloseCircle>
                  </button>
                </div>
                <div className="cart__information">
                  <span className="cart__name">{products.name}</span>
                  <div className="cart__add">
                    <span
                      className="cart__minus"
                      onClick={() =>
                        choseAddedProductQuantity(products._id, "decrement")
                      }
                    >
                      <AiOutlineMinus></AiOutlineMinus>
                    </span>
                    <span className="cart__qty">{products.quantity}</span>
                    <span
                      className="cart__plus"
                      onClick={() =>
                        choseAddedProductQuantity(products._id, "increment")
                      }
                    >
                      <AiOutlinePlus></AiOutlinePlus>
                    </span>
                  </div>
                  <span className="cart__price">{products.price}€</span>
                </div>
              </div>
            ))}
        </div>

        {addedProducts.length >= 1 && (
          <div className="cart__money">
            <span>Total:</span>
            <span className="cart__total">{totalPrice}€</span>
          </div>
        )}
        <Link href="/buy">
          <button type="button" className="cart__final" onClick={() => setShowCart(false)}>
            Proceder para o pagamento
          </button>        
        </Link>

      </div>
    </div>
  );
};

export default Cart;
