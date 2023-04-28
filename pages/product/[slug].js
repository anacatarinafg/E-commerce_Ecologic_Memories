import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { motion } from "framer-motion";
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

const IndividualProduct = ({ product, products }) => {
  const { image, name, details, price } = product; // destructure the values from the product so we don't have to repeat "product.image" "product.name"...;
  const [index, setIndex] = useState(0);
  const {
    decreaseQuantity,
    increaseQuantity,
    quantity,
    onAdd,
    onAddtoFavourites,
  } = useStateContext();
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <div className="item">
        <div className="item__imgs">
          <div className="item__image">
            <img src={urlFor(image && image[index])}></img>
          </div>
          {/* Create another div that will contain other pictures (small ones that we can click on) from the product */}
          <div className="item__images">
            {image?.map((images, i) => (
              <img
                key={i}
                src={urlFor(images)}
                className={
                  i === index ? "small__image selected__image" : "small__image"
                }
                onMouseEnter={() => setIndex(i)}
              ></img>
            ))}
          </div>
        </div>
        <div className="item__information">
          <h2 className="item__headline">{name}</h2>

          <div className="item__quantity">
            <span className="item__minus" onClick={decreaseQuantity}>
              <AiOutlineMinus></AiOutlineMinus>
            </span>
            <span className="item__qty">{quantity}</span>
            <span className="item__plus" onClick={increaseQuantity}>
              <AiOutlinePlus></AiOutlinePlus>
            </span>
          </div>
          <div className="item__buy">
            <button
              className="item__button"
              type="button"
              onClick={() => onAddtoFavourites(product, quantity)}
            >
              Adicionar aos favoritos
            </button>
            <button
              className="item__button"
              type="button"
              onClick={() => onAdd(product, quantity)}
            >
              Adicionar ao carrinho
              <span className="item__price">{price}€</span>
            </button>
          </div>
          <div className="item__detail">
            <p className="item__description">{details}</p>
          </div>
        </div>
      </div>

      {/* Similar products */}
      <motion.div className="slide" ref={carousel} whileTap={"grabbing"}>
        <h2 className="slide__headline">Veja outros produtos</h2>
        <motion.div
          className="slide__wrapper"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <motion.div className="slide__products">
            {products.map((item) => (
              <motion.div className="slide__product">
                <Product key={item._id} product={item} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// When we use getStaticProps, we also need to add one extra special next.js function called getStaticPaths;
/* 
    getStaticPaths {
        We need to know that the user can click on all products avaiable on our page to be incredibly optimized and Next.js needs to know that all oh these pages can be clicked. Then it's going to immediately show usthe data, but since we're going to have multiple other links in the IndividualProducts page (like visit other products), we need to also repeat the process for them so that Next.js can prepare all of the data and deliver it
    }
*/
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
        slug {
          current
        }
      }`; // we're saying to give all the products, but don't return all of the data for all the products, just return the current slug property
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));

  return {
    paths,
    fallback: "blocking", // If fallback is 'blocking', new paths not returned by getStaticPaths will wait for the HTML to be generated, identical to SSR (hence why blocking), and then be cached for future requests so it only happens once per path;
  };
};

// getStaticProps is used to pre-render the page at build time;
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`; // we are fetching data from the page that we are on;
  const productsQuery = '*[_type == "product"]'; // we also want to fetch all similar products;

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default IndividualProduct;
