import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";


const CusDataFetch = () => {
  
    const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");


  const loadingMessage = <p>Todo is Loading..........</p>;

  const todoElement =
  data &&
  data.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div style={{ margin: "3rem" }}>
      <h1>DataFetch- Todos</h1>
      {error && <p>{error}</p>}

      {
        isLoading && loadingMessage
      }
      {todoElement}
    </div>
  );
};

export default CusDataFetch;
