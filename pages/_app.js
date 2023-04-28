import React from "react";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";

// Importação do CSS;
import "../styles/globals.css";
import "../styles/cart.css";
import "../styles/footer.css";
import "../styles/navbar.css";
import "../styles/product.css";
import "../styles/shop.css";
import "../styles/slideshow.css";
import "../styles/slider.css";
import "../styles/item.css";
import "../styles/promo.css";
import "../styles/contact.css";
import "../styles/about.css";
import "../styles/buy.css";
import "../styles/newsletter.css";
import "../styles/favourites.css";
import "../styles/success.css";


// Importação do State;
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
