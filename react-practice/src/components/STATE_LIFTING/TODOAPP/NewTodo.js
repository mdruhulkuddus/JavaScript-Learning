import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");

  const handleNewTodo = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTODO(todo);
  };

  return (
    <Card className="p-5 m-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>New Todo</Form.Label>
          <Form.Control
            type="text"
            placeholder="write your task"
            name="todo"
            id="todo"
            onChange={handleNewTodo}
            value={todo}
          />
        </Form.Group>
        <Button type="submit">Add Todo</Button>
      </Form>
    </Card>
  );
};

export default NewTodo;
