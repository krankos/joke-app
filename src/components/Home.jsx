import React from "react";

export default function Home(props) {
  console.log(props);
  return props.jokes.map((joke) => (
    <>
      <h3>{joke.author}</h3> <p>{joke.content}</p>
    </>
  ));
}
