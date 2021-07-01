import React from "react";

function App() {
  const [counter, setCounter] = React.useState(60);


  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <div>Countdown: {counter}</div>
    </div>
  );
}

const CreateNewPost = props => {
  return (
    <>
    <section className="create-post">
      <form onSubmit={props.savePost}>
        <h1>Create New MinTicle</h1>

        

       <input
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="Title"
          size="39"
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <textarea
          onChange={props.savePostContentToState}
          placeholder="Content"
          rows="8"
          cols="41"
          required
          ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <section className="button-wrapper">
        <button className="button">Save and Start</button></section>
      </form>
      </section>
    </>
  );
};
export default CreateNewPost;
