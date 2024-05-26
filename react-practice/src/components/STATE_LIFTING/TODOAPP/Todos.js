import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Todo from './Todo'; // Make sure the path to Todo component is correct

const Todos = (props) => {
  return (
    <Card className="p-5 m-5">
      <Table striped>
        <tbody>
          {props.todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

export default Todos;
