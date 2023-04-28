import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product">
          <img src={urlFor(image && image[0])} className="product__image"></img>
          <div className="product__information">
            <p className="product__name">{name}</p>
            <p className="product__price">{price}€</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
