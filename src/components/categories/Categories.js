import React,{ useEffect } from "react";
import "./Categories.css";
import { useSelector, useDispatch } from "react-redux";
import { asyncPosts } from "../../features/posts/PostsSlice";
import { asyncCategories ,selectCategories } from "../../features/categories/fetchCategories";
export function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  useEffect(() => {
    dispatch(asyncCategories());
  }, []);
  console.log(categories)
  return (
    <nav>
        <h2>The choices we make, determine our destiny</h2>
        <span>choose wisely</span>
      <ul id="categories-select">
        {categories.map((category) => {
          return(
            <li onClick={() =>{
              dispatch(asyncPosts(category.name))
            }} className='category-li' key={category.name}>
              {category.icon !== '' ? <div className="image-container"><img src={category.icon}></img></div> : <svg style={{color:'blue'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="_30bZQzX8IR92H3gw3vlaLF "><path d="M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"></path></svg>}
              <span>{category.name}</span>
              </li>
          )
        })}
      </ul>
    </nav>
  )
}
