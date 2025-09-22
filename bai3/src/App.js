// src/App.js
import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

// Dữ liệu sản phẩm (thường thì sẽ lấy từ API)
const initialProducts = [
  { id: 1, name: "Sách", price: 10000 },
  { id: 2, name: "Bút", price: 5000 },
  { id: 3, name: "Vở", price: 7000 },
];

function App() {
  // State để lưu trữ các sản phẩm trong giỏ hàng
  const [cartItems, setCartItems] = useState([]);

  // Hàm để xử lý việc thêm sản phẩm vào giỏ
  const handleAddToCart = (product) => {
    // Dùng spread syntax (...) để tạo một mảng mới
    // bao gồm các sản phẩm cũ và sản phẩm mới được thêm vào
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Bài 3: Giỏ hàng</h2>
        <div className="container">
          {/* Component hiển thị danh sách sản phẩm */}
          <ProductList
            products={initialProducts}
            onAddToCart={handleAddToCart}
          />

          {/* Component hiển thị giỏ hàng */}
          <ShoppingCart cartItems={cartItems} />
        </div>
      </header>
    </div>
  );
}

export default App;
