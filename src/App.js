import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Form from "./components/Form";
import Header from "./components/Header";
function App() {
  const [jokes, setJokes] = React.useState([]);
  function addJoke(author, content) {
    const newJoke = {
      author: author,
      content: content,
    };
    setJokes(jokes.concat(newJoke));
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home jokes={jokes} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/add_jokes" component={Form}>
            <Form addJoke={addJoke} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
