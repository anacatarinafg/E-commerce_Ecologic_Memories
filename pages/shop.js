import React, { useState } from "react";

import { StateContext } from "../context/StateContext";
import { client } from "../lib/client";
import { Shop } from "../components";

import { AiOutlineSearch } from "react-icons/ai";



const shop = ({ products }) => {
  const [findItem, setFindItem] = useState("");
  const [loadMore, setLoadMore] = useState(6);

  const showMoreItems = () => {
    setLoadMore((previousValue) => previousValue + 6);
  };

  // console.log( products.filter((product) => product.name.toLowerCase().includes("ca"));

  return (
    <>
      <div className="shop__container">
        <div className="shop__headline">
        <h1>Todos os produtos</h1>          
        </div>
      {/* Search for each item */}
      <div className="shop__search">
        <div className="shop__searching">
          <label className="shop__label">
            <input
              type="search"
              id="search"
              className="shop__find"
              placeholder="Procurar..."
              onChange={(e) => setFindItem(e.target.value)}
            ></input>
            <button className="shop__button">
              <AiOutlineSearch className="shop__icon"></AiOutlineSearch>
            </button>
          </label>
        </div>
      </div>
      {/*  */}
      <div className="box">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(findItem.toLowerCase())
          )
          .slice(0, loadMore)
          .map((product) => (
            <Shop key={shop._id} shop={product} />
          ))}
      </div>

      <div className="shop__viewMore">
        <button className="shop__page" onClick={showMoreItems}>
          Ver mais artigos
        </button>
      </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const query = '*[_type == "product"]'; // what we are saying where is - let's grab all the products from our sanity dashboard

  const products = await client.fetch(query);

  return {
    props: { products }, // will be passed to the page component as props
  };
};

export default shop;
