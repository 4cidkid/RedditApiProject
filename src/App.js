import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Header } from "./components/header/Header";
import { Categories } from "./components/categories/Categories";
function App() {
  return (
    <>
      <Header />
      <div className="App">
        {/* <Counter /> */}
        <div></div>
        <div>
          <Categories />
        </div>
      </div>
    </>
  );
}

export default App;
