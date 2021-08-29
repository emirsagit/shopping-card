import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext();
const url = "https://fakestoreapi.com/products";

function Provider(props) {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setProducts(data);
            console.log(data)
        })
    }, [])
  return <ThemeContext.Provider value={products}>{props.children}</ThemeContext.Provider>;
}

export { Provider, ThemeContext };

// # Challenge

// Add state to our context and pass it through the Provider

// 1. Add state to hold the array of all photos our app gets from the API
// 2. Pass the array of all photos through the value of the provider so it's available anywhere the app accesses the context
