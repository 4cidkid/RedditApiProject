import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Header } from "./components/header/Header";
import { Categories } from "./components/categories/Categories";
import { Posts } from "./components/posts/Posts";
function App() {
  return (
    <>
      <Header />
      <div className="App" style={{display:'flex'}}>
        {/* <Counter /> */}
        <div id="post-section">
          <Posts />
        </div>
        <div className="categoriesdiv" style={{width:'30%',height:'fit-content',padding:40,backgroundColor:'white'}}>
          <Categories />
        </div>
      </div>
    </>
  );
}
export default App;
