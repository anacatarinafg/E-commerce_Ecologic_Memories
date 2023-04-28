// In this page, we're going to manage the entire state of our application

import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  // by passing the children, this means that whenever we call our StateContext, it will be considered children and we can render it out
  const [showCart, setShowCart] = useState(false); // show cart when clicked on icon
  const [showMenu, setShowMenu] = useState(false); // show responsive navbar when clicked
  const [showFavourites, setShowFavourites] = useState(false); // show favourites when clicked
  const [addedFavourites, setAddedFavourites] = useState([]); // items we added to favourites
  const [addedProducts, setAddedProducts] = useState([]); // items we added to our cart
  const [totalPrice, setTotalPrice] = useState(0); // total price of the items added to the cart
  const [quantity, setQuantity] = useState(1); // quantity of items added to the car
  const [totalFavourites, setTotalFavourites] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  let choseProduct;
  let index;

  const onAddtoFavourites = (product) => {
    const checkProductinFavourites = addedFavourites.find(
      (item) => item._id === product._id
    );

    if (checkProductinFavourites) {
      const updatedFavouritesProducts = addedFavourites.map((productAdded) => {
        if (productAdded._id === product._id)
          return {
            ...productAdded,
            quantity: productAdded.quantity,
          };
      });
      setAddedFavourites(updatedFavouritesProducts);
      toast(`${product.name} já se encontra nos favoritos.`, {
        icon: "❌",
      });
    } else {
      setTotalFavourites(
        (previousTotalFavourites) => previousTotalFavourites + 1
      );
      product.quantity = 1;
      setAddedFavourites([...addedFavourites, { ...product }]);
      toast(`${product.name} adicionado aos favoritos.`, {
        icon: "❤️",
      });
    }
  };

  const onRemovetoFavourites = (product) => {
    choseProduct = addedFavourites.find((item) => item._id === product._id);
    const newAddedtoFavourites = addedFavourites.filter(
      (item) => item._id !== product._id
    );
    setTotalFavourites(
      (previousTotalFavourites) => previousTotalFavourites - 1
    );
    setAddedFavourites(newAddedtoFavourites);
  };

  const onAdd = (product, quantity) => {
    // Check if the product that we added to the cart is already there. We need to loop over all the items add to the cart and check if the item.id is equal to product.id;
    const checkProductinCart = addedProducts.find(
      (item) => item._id === product._id
    );
    // If the product is already in the cart, then we simply need to increase the quantity of the current product;
    setTotalPrice(
      (previousTotalPrice) => previousTotalPrice + product.price * quantity
    );
    setTotalQuantity(
      (previousTotalQuantity) => previousTotalQuantity + quantity
    );

    if (checkProductinCart) {
      // Now that our states are updated, we need to update the actual products in the cart. We need to get each individual cart product and check if the id of the cart product is equal to product.id, if so, then we can return a new object which is going to spread the cart product, but this time is going to update the quantity of that product
      const updatedCartProducts = addedProducts.map((itemAdded) => {
        if (itemAdded._id === product._id)
          return {
            ...itemAdded,
            quantity: itemAdded.quantity + quantity,
          };
      });

      // Updating our state;
      setAddedProducts(updatedCartProducts);
    } else {
      product.quantity = quantity;

      setAddedProducts([...addedProducts, { ...product }]);
    }
    toast.success(`${product.name} adicionado ao carrinho com sucesso.`);
  };

  const onRemove = (product) => {
    choseProduct = addedProducts.find((item) => item._id === product._id);
    const newAddedProducts = addedProducts.filter(
      (item) => item._id !== product._id
    );

    setTotalPrice(
      (previousTotalPrice) =>
        previousTotalPrice - choseProduct.price * choseProduct.quantity
    );
    setTotalQuantity(
      (previousTotalQuantity) => previousTotalQuantity - choseProduct.quantity
    );
    setAddedProducts(newAddedProducts);
  };

  const choseAddedProductQuantity = (id, value) => {
    choseProduct = addedProducts.find((item) => item._id === id);
    index = addedProducts.findIndex((product) => product._id === id);
    const newAddedProducts = addedProducts.filter((item) => item._id !== id);

    if (value === "increment") {
      setAddedProducts([
        ...newAddedProducts,
        { ...choseProduct, quantity: choseProduct.quantity + 1 },
      ]);
      setTotalPrice(
        (previousTotalPrice) => previousTotalPrice + choseProduct.price
      );
      setTotalQuantity((previousTotalQuantity) => previousTotalQuantity + 1);
    } else if (value === "decrement") {
      if (choseProduct.quantity > 1) {
        setAddedProducts([
          ...newAddedProducts,
          { ...choseProduct, quantity: choseProduct.quantity - 1 },
        ]);
        setTotalPrice(
          (previousTotalPrice) => previousTotalPrice - choseProduct.price
        );
        setTotalQuantity((previousTotalQuantity) => previousTotalQuantity - 1);
      }
    }
  };

  const increaseQuantity = () => {
    setQuantity((qty) => qty + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((qty) => {
      if (qty - 1 < 1) return 1;

      return qty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        showMenu,
        setShowMenu,
        showFavourites,
        setShowFavourites,
        addedFavourites,
        setAddedFavourites,
        addedProducts,
        setAddedProducts,
        totalPrice,
        setTotalPrice,
        quantity,
        setQuantity,
        totalQuantity,
        setTotalQuantity,
        totalFavourites,
        setTotalFavourites,
        increaseQuantity,
        decreaseQuantity,
        onAdd,
        onAddtoFavourites,
        choseAddedProductQuantity,
        onRemove,
        onRemovetoFavourites,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context); // function that allow usto easily grab the state;
