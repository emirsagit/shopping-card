import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext();
const url = "https://fakestoreapi.com/products";

function Provider(props) {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [ordering, setOrdering] = useState(false);

  function setFavorite(id) {
    const newProducts = products.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          favorited: !el.favorited,
        };
      }
      return el;
    });

    localStorage.setItem("products", JSON.stringify(newProducts));
    setProducts(newProducts);
  }

  function setCartToLocalStorage(items) {
    localStorage.setItem("cart", JSON.stringify(items));
  }

  function addItemToCart(product) {
    product.quantity = 1;
    const newItems = [...cartItems, product];
    setCartItems(newItems);
    setCartToLocalStorage(newItems);
  }

  function removeItemFromCart(product) {
    const newItems = cartItems.filter((item) => {
      return item.id !== product.id;
    });

    setCartItems(newItems);

    setCartToLocalStorage(newItems);
  }

  function handleQuantityChange(product, value) {
    if (value < 0) {
      return;
    } else if (value === 0) {
      removeItemFromCart(product);
      return;
    }

    const newItems = cartItems.map((item) => {
      if (item.id === product.id) {
        item.quantity = value;
      }
      return item;
    });

    setCartItems(newItems);
    setCartToLocalStorage(newItems);
  }

  function convertToCurrency(intValue) {
    return intValue.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  function placeOrder() {
    setOrdering(true);
    const date = new Date();
    setTimeout(() => {
      const newOrder = [
        ...orders,
        { id: date.getTime(), products: cartItems, status: "pending", created: date.toLocaleDateString() },
      ];
      setOrders(newOrder);
      localStorage.setItem("orders", JSON.stringify(newOrder));
      setCartItems([]);
      localStorage.removeItem("cart");
      setOrdering(false);
      setRedirect(true);
    }, 3000);
  }

  useEffect(() => {
    const localStorageProducts = JSON.parse(localStorage.getItem("products"));
    const localStorageCart = JSON.parse(localStorage.getItem("cart"));
    const localStorageOrders = JSON.parse(localStorage.getItem("orders"));
    localStorageCart && setCartItems(localStorageCart);
    localStorageOrders && setOrders(localStorageOrders);
    if (!localStorageProducts) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const newData = data.map((el) => {
            el.favorited = false;
            el.id === 14 ? (el.isFeautured = true) : (el.isFeautured = false);
            return el;
          });
          setProducts(newData);
          localStorage.setItem("products", JSON.stringify(newData));
        });
    } else {
      setProducts(localStorageProducts);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        productsData: products,
        setFavorite,
        addItemToCart,
        cartItems,
        removeItemFromCart,
        convertToCurrency,
        handleQuantityChange,
        ordering,
        placeOrder,
        orders,
        setRedirect,
        redirect,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { Provider, ThemeContext };
