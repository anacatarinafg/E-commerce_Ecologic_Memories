import React, { useRef } from "react";
import Link from "next/link";

// Importação do State;
import { useStateContext } from "../context/StateContext";

// Importação do urlFor para as imagens;
import { urlFor } from "../lib/client";

import {
  AiOutlineCloseCircle,
  AiOutlineShopping,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { IoIosExit } from "react-icons/io";

const Favourites = () => {
  const favRef = useRef();
  const {
    showFavourites,
    setShowFavourites,
    totalFavourites,
    onRemovetoFavourites,
    addedFavourites,
    onAdd
  } = useStateContext();
  return (
    // ADICIONAR BUTTON PARA ADICIONAR O PRODUTO AO CARRINHO

    <div className="favourites" ref={favRef}>
      <div className="favourites__box">
        <button
          className="favourites__button"
          type="button"
          onClick={() => setShowFavourites(false)}
        >
          <IoIosExit className="favourites__close" />
        </button>
        <p className="favourites__headline">
          Favoritos
          <span className="favourites__quantity">({totalFavourites})</span>
        </p>

        {/* Div that will show if there's no products currently in the favourites */}
        {addedFavourites.length < 1 && (
          <div className="favourites__empty">
            <AiOutlineShopping className="favourites__icon" />
            <p className="favourites__empty--text">
              Parece que não adicionaste nenhum produto aos favoritos.
            </p>

            <Link href="/shop">
              <button
                className="favourites__goShopping"
                type="button"
                onClick={() => setShowFavourites(false)}
              >
                Ir para a <span>loja</span>
              </button>
            </Link>
          </div>
        )}

        {/* Div that contains the products added to the cart */}
        <div className="favourites__products">
          {addedFavourites.length >= 1 &&
            addedFavourites?.map((favourites) => (
              <div
                className="favourites__product"
                key={favourites._id}
                id={favourites._id}
              >
                <img
                  src={urlFor(favourites?.image[0])}
                  alt={favourites.name}
                  className="favourites__image"
                ></img>
                <div>
                  <button
                    type="button"
                    className="favourites__removeItem"
                    onClick={() => onRemovetoFavourites(favourites)}
                  >
                    <AiOutlineCloseCircle></AiOutlineCloseCircle>
                  </button>
                </div>
                <div className="favourites__information">
                  <span className="favourites__name">{favourites.name}</span>
                  <span className="favourites__price">{favourites.price}€</span>
                </div>
                <button
                  className="favourites__add-to-cart"
                  type="button"
                  onClick={() => onAdd(favourites, favourites.quantity)}
                >
                  Adicionar ao carrinho
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
