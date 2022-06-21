import { useEffect, useState } from "react";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/dummy-backend.json")
      .then((response) => {
        return response.json;
      })
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return <Component {...pageProps} />;
}

export default App;
