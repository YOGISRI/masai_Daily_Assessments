export default function ProductList({ products, onSelect }) {
  console.log("ProductList rendered");

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id} onClick={() => onSelect(p)}>
          {p.name} - ₹{p.price}
        </li>
      ))}
    </ul>
  );
}
