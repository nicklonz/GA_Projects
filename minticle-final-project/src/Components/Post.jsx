import React from "react";
import logo from './logo.svg';
import ClockElement from "./ClockElement";

const Post = ({ title, content, editPost, id, deletePost }) => {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <ClockElement />
      <section className="post-container">
        <h2>{title}</h2>
        <p className="post-content"> {content}</p>
        <button className="button" onClick={() => editPost(id)}>Edit</button>
        <button className="button" onClick={() => deletePost(id)}>Delete</button>
      </section>
    </>
  );
};
export default Post;
