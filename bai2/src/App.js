// src/App.js
import React, { useState } from "react";
import "./App.css";
import ColorBox from "./ColorBox"; // Import component con

function App() {
  const [boxColor, setBoxColor] = useState("white");

  return (
    <div className="App">
      <header className="App-header">
        <h2>Bài 2: Color Picker</h2>
        <div>
          {/* 3. Khi click vào mỗi nút, gọi hàm setBoxColor để cập nhật state */}
          <button onClick={() => setBoxColor("red")}>Đỏ</button>
          <button onClick={() => setBoxColor("green")}>Xanh</button>
          <button onClick={() => setBoxColor("yellow")}>Vàng</button>
        </div>

        {/* 2. Truyền state `boxColor` vào prop `color` của component ColorBox */}
        <ColorBox color={boxColor} />
      </header>
    </div>
  );
}

export default App;
