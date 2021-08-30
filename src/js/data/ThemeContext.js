import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext();
const url = "https://fakestoreapi.com/products";

function Provider(props) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  function addItemToCart(product) {
    setCartItems((prevItems) => [...prevItems, product]);
  }

  function removeItemFromCart(product) {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id != product.id;
      });
    });
  }

  console.log(cartItems);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("products"));
    if (!localStorageData) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const newData = data.map((el) => {
            el.favorited = false;
            return el;
          });
          setProducts(newData);
          localStorage.setItem("products", JSON.stringify(newData));
        });
    } else {
      setProducts(localStorageData);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{ productsData: products, setFavorite, addItemToCart, removeItemFromCart, cartItems }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { Provider, ThemeContext };
