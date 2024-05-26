import React, { useState } from 'react'
import Todos from './Todos';
import NewTodo from './NewTodo';

const dummyTodos = ["todo1", "todo2"];

const TODOHOME = () => {

const [todos, setTodos] = useState(dummyTodos);

const handleNewTodo = (newTODO) => {
  setTodos([...todos, newTODO]);
  // console.log(todos);
};

  return (
    <div>
      <NewTodo onTODO = {handleNewTodo}/>
      <Todos todos={todos} />
    </div>
  )
}

export default TODOHOME
