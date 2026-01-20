import { useDispatch } from "react-redux";
import { addToCart } from "../Features/Cart/CartSlice";
import { getProducts } from "../Features/Products/ProductService";
import LogoutButton from "../Components/LogoutButton";

function UserPanel() {
  const dispatch = useDispatch();
  const products = getProducts();

  return (
    <div>
      <h1>User Panel</h1>
      <LogoutButton />

      {products.length === 0 && <p>No products available</p>}

      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <p>Stock: {p.stock}</p>

          <button
            onClick={() => dispatch(addToCart(p))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default UserPanel;
