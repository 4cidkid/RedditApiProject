import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLoading,
  asyncPosts,
  selectPosts,
  selectComments,
  asyncComments,
} from "../../features/posts/PostsSlice";
import { ArrowUp, ArrowDown, MessageSquare } from "react-feather";
import "./posts.css";
import { Comments } from "../comments/comments";
export function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoading);
  const comments = useSelector(selectComments);
  const [showComments, setShowComments] = useState(false);
  const [indexShow, setIndexShow] = useState('');
  function showTheComments(e) {
    e.preventDefault();
    setShowComments(true);
    setIndexShow(e.currentTarget.attributes.id.value);
    dispatch(asyncComments(e.currentTarget.attributes.id.value));
  }
  console.log(comments);
  useEffect(() => {
    dispatch(asyncPosts());
  }, []);
  const [greenPressed, setGreenPressed] = useState(false);
  const [redPressed, setRedPressed] = useState(false);
  function handleUp(e) {
    if (greenPressed) {
      e.currentTarget.parentElement.parentElement.querySelector(
        "#upvotesnum"
      ).innerHTML =
        posts[e.currentTarget.attributes.id.value.split(" ")[1]].upVotes;
    }
    e.currentTarget.firstChild.style.color = "#05c224";
    e.currentTarget.nextSibling.firstChild.style.color = "#000";
    let currentNum =
      e.currentTarget.parentElement.parentElement.querySelector(
        "#upvotesnum"
      ).textContent;
    e.currentTarget.parentElement.parentElement.querySelector(
      "#upvotesnum"
    ).innerHTML = parseInt(currentNum) + 1;
    e.currentTarget.parentElement.parentElement.querySelector(
      "#downvotesnum"
    ).innerHTML =
      posts[e.currentTarget.attributes.id.value.split(" ")[1]].downVotes;

    setGreenPressed(true);
  }
  function handleDown(e) {
    if (redPressed) {
      e.currentTarget.parentElement.parentElement.querySelector(
        "#downvotesnum"
      ).innerHTML =
        posts[e.currentTarget.attributes.id.value.split(" ")[1]].downVotes;
    }
    e.currentTarget.firstChild.style.color = "#d52619";
    e.currentTarget.previousSibling.firstChild.style.color = "#000";
    let currentNum =
      e.currentTarget.parentElement.parentElement.querySelector(
        "#downvotesnum"
      ).textContent;
    e.currentTarget.parentElement.parentElement.querySelector(
      "#downvotesnum"
    ).innerHTML = parseInt(currentNum) - 1;
    e.currentTarget.parentElement.parentElement.querySelector(
      "#upvotesnum"
    ).innerHTML =
      posts[e.currentTarget.attributes.id.value.split(" ")[1]].upVotes;

    setRedPressed(true);
  }
  return (
    <>
      {loading ? (
        <div className="loading">
          <span>Loading...</span>
          <img
            src="https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif"
            alt="loading-cat"
          ></img>
        </div>
      ) : (
        posts.map((post, i) => {
          return (
            <div className={`post`} key={post.link}>
              <div className="downUp">
                <span id="upvotesnum">{post.upVotes}</span>
                <div onClick={handleUp} id={`uparrow ${i}`}>
                  <ArrowUp></ArrowUp>
                </div>
                <div onClick={handleDown} id={`downarrow ${i}`}>
                  <ArrowDown></ArrowDown>
                </div>
                <span id="downvotesnum">{post.downVotes}</span>
              </div>
              <div className="card-center">
                <span
                  style={{
                    width: "100%",
                    display: "flex",
                    padding: "8px 0px",
                    fontSize: 21,
                    fontWeight: 600,
                    opacity: 0.7,
                  }}
                >
                  {post.title}
                </span>
                <a href={post.link} target="_blank">
                  <img src={post.imgUrl} alt={post.title} />
                </a>
                <div className="author-sub">
                  <span>{post.subRedditPrefix}</span>
                  <span>{post.author}</span>
                </div>
                <MessageSquare
                  id={post.link}
                  onClick={showTheComments}
                ></MessageSquare>
                {showComments && (
                  <Comments comments={comments} indexShow={indexShow} currentIndex={post.link} setShowComments={setShowComments}></Comments>
                )}
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
