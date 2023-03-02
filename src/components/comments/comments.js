import React from "react";
import { X } from "react-feather";
import { selectLoadingComments } from "../../features/posts/PostsSlice";
import { useSelector } from "react-redux";
export function Comments({
  comments,
  indexShow,
  currentIndex,
  setShowComments,
}) {
  const comentarios = comments;
  const isLoadingComments = useSelector(selectLoadingComments);
  if (indexShow !== currentIndex) {
    return;
  } else {
    return (
      <div
        style={{ position: "absolute", background: "black", color: "white" }}
        className="children-comments"
      >
       {!isLoadingComments && <div>
          {comentarios.map((comment) => {
            return (
              <>
                <span>{comment.author}: </span>
                <br></br>
                <span>{comment.comment}</span>
                <br></br>
              </>
            );
          })}
          {comentarios.length === 0 && <span style={{textAlign:'center',padding:6}}>No comments yet :(</span>}
          <div
            style={{
              position: "sticky",
              background: "white",
              color: "black",
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: 9,
              borderRadius: "1%",
            }}
            onClick={() => {
              setShowComments(false);
            }}
          >
            <span>Close Comment Section</span>
            <X></X>
          </div>
        </div>}
      </div>
    );
  }
}
