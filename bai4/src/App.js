import React from "react";
import Post from "./Post";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Bài 4: Like/Dislike Post</h1>

      {/* Render component Post và truyền nội dung qua prop `content` */}
      <Post content="Học ReactJS có khó không?" />
      <Post content="Props và State là gì?" />
      <Post content="Lập trình web có vui không?" />
    </div>
  );
}

export default App;
