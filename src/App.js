import "./App.css";
import { useEffect, useState } from "react";

import React from "react";
import Logo from "./assets/BurguerKenzie.png";

import ProductList from "./components/ProductsList";
import Cart from "./components/Cart";

import axios from "axios";

import { toast } from 'react-toastify'


function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios
        .get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
        .catch((err) => {
          console.log(`Ocorreu um erro ${err}`);
        });

      setProducts(response.data);
    }

    fetchProducts();
  }, []);

  const newArrayFilter = products.filter(
    (item) =>
      item.name.toLowerCase().includes(filteredProducts.toLowerCase()) ||
      item.category.toLowerCase().includes(filteredProducts.toLowerCase())
  );
 
  const handleClick = (newItem) => {

     if (!currentSale.find((item) => item === newItem )) {
          setCurrentSale([...currentSale, newItem])
          toast.success('Adicionado com sucesso')
      }
      else {
          toast.error('Esse item já existe no carrinho')
      }

  };

  const removeItem = (remove) => {
    setCurrentSale(currentSale.filter((item) => item !== remove));
  };

  const removeAll = () => {
    setCurrentSale(currentSale.filter((item) => item === removeAll));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt={Logo}></img>

        <div className="App-header search">
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            name="name"
            value={filteredProducts}
            onChange={(event) => setFilteredProducts(event.target.value)}
          />

          <button>Pesquisa</button>
        </div>
      </header>

      <main>
        <div className="contanier-main">
          <ProductList
            newArrayFilter={newArrayFilter}
            handleClick={handleClick}
          />

          <Cart
            currentSale={currentSale}
            removeItem={removeItem}
            removeAll={removeAll}
          />
        </div>
      </main>
    </div>
  );
}

export default App;