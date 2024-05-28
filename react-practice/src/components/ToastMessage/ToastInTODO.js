import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastInTODO = () => {

    const handleAddTodo = ()=>{
        toast("Todo Added Successfully")
    }
    const handleDeleteTodo = ()=>{
        toast.warn("Todo Deleted Successfully")
    }

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card className="p-4">
            <h1 className="text-center">TODO APP</h1>
            <div className="text-center mt-3">
              <Button className="m-2" onClick={handleAddTodo}>Add Todo</Button>
              <Button variant="danger" className="m-2" onClick={handleDeleteTodo}>Delete Todo</Button>
            </div>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  )
}

export default ToastInTODO
