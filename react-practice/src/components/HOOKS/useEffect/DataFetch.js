import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const loadingMessage = <p>Todo is Loading..........</p>;

const DataFetch = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      // fetch("https://jsonplaceholder.typicode.com/todo") // error show fetching not successful
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          if (!res.ok) {
            throw Error("Fetching is not successful");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setTodos(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  const todoElement =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div style={{ margin: "3rem" }}>
      <h1>DataFetch- Todos</h1>
      {error && <p>{error}</p>}

      {
        isLoading && <Loader /> // if it is componet use angle bracket
      }
      {todoElement}
    </div>
  );
};

export default DataFetch;
