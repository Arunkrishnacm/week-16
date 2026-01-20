import { addProduct } from "../Features/Products/ProductService";

function AdminPanel() {
  const handleAdd = () => {
    addProduct({
      id: Date.now(),
      name: "iPhone 15",
      price: 70000,
      stock: 5,
    });
    alert("Product added");
  };

  return <button onClick={handleAdd}>Add Product</button>;
}

export default AdminPanel;
