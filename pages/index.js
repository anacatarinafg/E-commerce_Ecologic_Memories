import React, { useState, useEffect, useRef } from "react";

// Import data from sanity;
import { client } from "../lib/client";
import { urlFor } from "../lib/client";

import { motion } from "framer-motion";
import { Fade } from "react-slideshow-image";
import { Product, Newsletter } from "../components";

import { AiFillEuroCircle, AiFillMessage } from "react-icons/ai";

import { FaShippingFast } from "react-icons/fa";

const Home = ({ products, slideshowData }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
  }

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="slideshow">
        <Fade {...properties}>
          {slideshowData?.map((slide) => (
            <div className="each-slide">
              <img
                src={urlFor(slide.image[0])}
                alt={slide.name}
                className="slideshow__image"
              ></img>
            </div>
          ))}
        </Fade>
      </div>

      {/* Add title of products here */}
      <div className="carousel__head">
        <h2 className="carousel__headline">Veja todos os nossos produtos</h2>
      </div>

      <motion.div className="carousel" ref={carousel} whileTap={"grabbing"}>
        <motion.div
          className="carousel__inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {products?.map((product) => {
            return (
              <motion.div className="carousel__item">
                <Product key={product._id} product={product} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <article className="promo">
        <div className="promo__container">
          <p className="promo__icon">
            <FaShippingFast />
          </p>
          <h2 className="promo__headline">Entrega grátis</h2>
          <div className="promo__info">
            <p className="promo__text">Entrega grátis em todos os artigos.</p>
          </div>
        </div>
        <div className="promo__container">
          <p className="promo__icon">
            <AiFillEuroCircle />
          </p>
          <h2 className="promo__headline">Paga mensalmente</h2>
          <div className="promo__info">
            <p className="promo__text">Paga às prestações.</p>
          </div>
        </div>
        <div className="promo__container">
          <p className="promo__icon">
            <AiFillMessage />
          </p>
          <h2 className="promo__headline">Contacta-nos</h2>
          <div className="promo__info">
            <p className="promo__text">
              Tens alguma questão? Manda-nos um e-mail.
            </p>
          </div>
        </div>
      </article>

      <Newsletter />
    </>
  );
};

// getServerSideProps is used to fetch data in Next.js;
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const slideshowQuery = '*[_type == "slideshow"]';
  const slideshowData = await client.fetch(slideshowQuery);

  return {
    props: { products, slideshowData },
  };
};

export default Home;
