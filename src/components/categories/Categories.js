import React,{ useEffect } from "react";
import "./Categories.css";
import { useSelector, useDispatch } from "react-redux";
import { asyncCategories,selectCategories } from "../../features/categories/fetchCategories";
export function Categories() {
  const cat = useSelector(selectCategories);
  useEffect(() => {
    useDispatch(asyncCategories());
  },[])
  console.log(cat)
  return (
    <nav>
        <h2>The choices we make, determine our destiny</h2>
        <span>choose wisely</span>
      <ul>
      </ul>
    </nav>
  )
}
