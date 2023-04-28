import React, { useState } from "react";
import Link from "next/link";

import {
  AiOutlineCloseCircle,
  AiOutlineShopping,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

// Importação do State;
import { useStateContext } from "../context/StateContext";

// Importação do urlFor para as imagens;
import { urlFor } from "../lib/client";

const Buy = () => {
  const [url, setUrl] = useState("/confetti.js");
  const {
    totalPrice,
    totalQuantity,
    addedProducts,
    setShowCart,
    choseAddedProductQuantity,
    onRemove,
  } = useStateContext();

  return (
    <div className="buy">
      <div className="buy__headline">
        <AiOutlineShopping className="buy__icon"></AiOutlineShopping>
      </div>
      <div className="buy__container">
        {/* This page will have two sections. One for user information and another one for the items added to the cart */}
        <section className="buy__section">
          <div className="buy__form">
            <form action="/success" method="get">
              <div className="adress">
                <p className="adress__title">Informação pessoal:</p>
                <div className="adress__name">
                  <label for="name" className="adress__label">
                    First and last name:
                  </label>
                  <input
                    type="text"
                    placeholder="Ana Gonçalves"
                    id="name"
                    className="adress__input"
                    required
                  ></input>
                </div>
                <div className="adress__email">
                  <label for="email" className="adress__label">
                    Email:
                  </label>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    id="email"
                    className="adress__input"
                    required
                  ></input>
                </div>
                <div className="adress__number">
                  <label for="number" className="adress__label">
                    Number:
                  </label>
                  <input
                    type="number"
                    placeholder="(+351) 966 666 666"
                    id="number"
                    className="adress__input"
                    required
                  ></input>
                </div>
                <div className="adress__country">
                  <label for="adress__country" className="adress__label">
                    Country:
                  </label>
                  <select
                    name="country"
                    id="country"
                    className="adress__select"
                  >
                    <option value="" selected disabled>
                      ---
                    </option>
                    <option value="">Alemanha</option>
                    <option value="">Bélgica</option>
                    <option value="">Espanha</option>
                    <option value="">França</option>
                    <option value="">Itália</option>
                    <option value="">Luxemburgo</option>
                    <option value="">Portugal</option>
                  </select>
                </div>
              </div>
              <div className="shipping">
                <p className="shipping__title">Método de envio:</p>
                <div className="shipping__method">
                  <input
                    type="radio"
                    className="shipping__input"
                    id="ship"
                    name="shipping"
                    required
                  ></input>
                  <label for="shipping" className="shipping__label">
                    <p className="shipping__transport">CTT Expresso</p>
                    <p className="shipping__time">1-3 days</p>
                  </label>
                  <p className="shipping__price">29.99€</p>
                </div>
                <div className="shipping__method">
                  <input
                    type="radio"
                    className="shipping__input"
                    name="shipping"
                    required
                  ></input>
                  <label for="shipping" className="shipping__label">
                    <p className="shipping__transport">DHL Express</p>
                    <p className="shipping__time">7-14 days</p>
                  </label>
                  <p className="shipping__price">Free</p>
                </div>
              </div>
              <div className="user">
                <p className="user__title">Informação para pagamento:</p>
                <label for="user" className="user__label">
                  User:
                </label>
                <input
                  type="text"
                  id="user"
                  className="user__input"
                  placeholder="Ana Gonçalves"
                  required
                ></input>
              </div>
              <div className="number">
                <label for="number" className="user__label">
                  Number:
                </label>
                <input
                  type="number"
                  id="number"
                  className="user__number"
                  placeholder="9999 8888 7777 6666"
                  required
                ></input>
              </div>
              <div className="date">
                <label for="user" className="user__label">
                  Date:
                </label>
                <input
                  type="text"
                  id="user"
                  className="user__date"
                  placeholder="MM/YY"
                  required
                ></input>
              </div>
              <div className="final__stage">
                <input
                  type="submit"
                  className="final__input"
                  value="Finalizar compra!"
                  href="/confetti"
                ></input>
              </div>
            </form>
          </div>
        </section>
        {/* Cart section */}
        <section className="details">
          <p className="details__paragraph">O seu carrinho de compras:</p>
          <div className="details__container">
            <div className="details__products">
              {addedProducts.length >= 1 &&
                addedProducts?.map((items) => (
                  <div
                    className="details__product"
                    key={items._id}
                    id={items._id}
                  >
                    <img
                      src={urlFor(items?.image[0])}
                      alt={items.name}
                      className="details__image"
                    ></img>
                    <div>
                      <button
                        type="button"
                        className="details__removeItem"
                        onClick={() => onRemove(items)}
                      >
                        <AiOutlineCloseCircle></AiOutlineCloseCircle>
                      </button>
                    </div>
                    <div className="details__information">
                      <span className="details__name">{items.name}</span>
                      <span className="details__price">{items.price}€</span>
                      <span className="details__quantity">
                        {items.quantity} productos
                      </span>
                    </div>
                  </div>
                ))}
            </div>
            {/* Div that will show if there's no products currently in the cart */}
            {addedProducts.length < 1 && (
              <div className="details__empty">
                <AiOutlineShopping className="details__icon" />
                <p className="details__empty--text">
                  Parece que não adicionaste nenhum produto ao carrinho.
                </p>

                <Link href="/shop">
                  <button
                    className="details__goShopping"
                    type="button"
                    onClick={() => setShowCart(false)}
                  >
                    Ir para a <span>loja</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
          {addedProducts.length >= 1 && (
            <div className="details__money">
              <span>Total:</span>
              <span className="details__total">{totalPrice}€</span>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Buy;
