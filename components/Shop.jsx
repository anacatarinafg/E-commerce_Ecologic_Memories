import React from "react";
import Link from "next/link";

import { AiOutlineEye } from "react-icons/ai";

import { urlFor } from "../lib/client";

const Shop = ({
  shop: { name, price, image, details, slug, brand, category },
}) => {
  return (
    <div>
      <div className="shop">
        <Link href={`/product/${slug.current}`}>
          <article className="highlights__article">
            <div className="highlights__images">
              <img
                src={urlFor(image && image[0])}
                alt={name}
                className="highlights__image"
              />
              <span className="highlights__favourite">
                <AiOutlineEye size={30}></AiOutlineEye>
                </span>
            </div>
            <div className="highlights__info">
              <h3 className="highlights__name">{name}</h3>
              <span className="highlights__price">{price}€</span>
            </div>
          </article>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
