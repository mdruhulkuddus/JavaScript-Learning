import React, { useState, useReducer } from "react";
import { reducer } from "./reducer";
import { Alert, Button, Container, ListGroup } from "react-bootstrap";
const booksData = [
  { id: 1, name: "Pather Panchal" },
  { id: 2, name: "Padma Nadir Majhi" },
  { id: 3, name: "  Srikanta" },
];

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

const initialState = {
  books: booksData,
  isModalOpen: false,
  modalText: "",
};
const UseReducer = () => {
  const [bookState, dispatch] = useReducer(reducer, initialState);
  const [bookName, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
  };

  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  return (
    <Container>
      <h3>Book List</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <Button type="submit">Add Book</Button>
      </form>

      {bookState.isModalOpen && 

<Alert variant="info" className="lg-6">
      <Modal modalText={bookState.modalText} />
      </Alert>
      }


      {bookState.books.map((book) => {
        const { id, name } = book;
        return (
            <ListGroup>
          <ListGroup.Item key={id}>
            {name}{" "}
            <button
              onClick={() => {
                removeBook(id);
              }}
            >
              Remove
            </button>
          </ListGroup.Item>
          </ListGroup>
          
        );
      })}
    </Container>
  );
};

export default UseReducer;