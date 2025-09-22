// src/ProductList.js
import React from "react";

// Nhận vào `products` và hàm `onAddToCart` từ props
function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      <h3>Sản phẩm</h3>
      {/* Dùng hàm map() để lặp qua mảng products và render từng sản phẩm */}
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <span>
            {product.name} - {product.price.toLocaleString("vi-VN")}đ
          </span>
          {/* Khi click, gọi hàm onAddToCart và truyền vào sản phẩm tương ứng */}
          <button onClick={() => onAddToCart(product)}>Thêm vào giỏ</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
