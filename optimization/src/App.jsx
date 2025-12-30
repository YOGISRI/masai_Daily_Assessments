import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList.jsx";

export default function App() {
  const [count, setCount] = useState(0);

  const products = useMemo(() => [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Tablet", price: 15000 }
  ], []);
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce(
      (sum, product) => sum + product.price,
      0
    );
  }, [products]);
  const handleSelect = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <>
      <h2>Total Price: {totalPrice}</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <ProductList
        products={products}
        onSelect={handleSelect}
      />
    </>
  );
}
