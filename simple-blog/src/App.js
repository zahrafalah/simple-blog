import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PostList } from "./components/PostList";

function App() {
  return (
    <div className="App">
      <div className="ui container">
        <PostList />
      </div>
    </div>
  );
}

export default App;
