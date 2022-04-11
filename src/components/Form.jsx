import React from "react";
import { Button } from "@material-ui/core";

export default function Form(props) {
  const [jokeAuthor, setJokeAuthor] = React.useState("");
  const [jokeContent, setJokeContent] = React.useState("");

  return (
    <div>
      <label>Author Name</label>
      <input
        onChange={(e) => setJokeAuthor(e.target.value)}
        type="text"
        placeholder="Type Author name"
      />
      <label>Anecdote</label>
      <input
        onChange={(e) => setJokeContent(e.target.value)}
        type="text"
        placeholder="Type Anecdote"
      />
      <Button
        color="primary"
        onClick={(e) => {
          console.log(props);
          e.preventDefault();
          props.addJoke(jokeAuthor, jokeContent);
          setJokeAuthor("");
          setJokeContent("");
        }}
      >
        Add Joke
      </Button>
    </div>
  );
}
