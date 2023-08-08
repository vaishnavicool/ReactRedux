import React, { useState } from "react";
import { Card, Col, Row, Container, Form, Button } from "react-bootstrap";
import DisplayCount from "./DisplayCount";

const AddToDo = () => {
  const [todo, setToDo] = useState({
    title: "",
    description: ""
  });

  const handleTitleChange = (event) => {
    setToDo({ ...todo, title: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setToDo({ ...todo, description: event.target.value });
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
    //add todo in store
    console.log(todo);
    setToDo({
      title:'',
      description:''
    })
  }
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h3>Add ToDo here!!</h3>
              <DisplayCount/>
              {/* form */}
              <Form onSubmit={handleSubmit}>
                {/* title */}
                <Form.Group>
                  <Form.Label>ToDo title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter task"
                    value={todo.title}
                    onChange={handleTitleChange}
                  />
                </Form.Group>

                {/* description */}
                <Form.Group className="mt-3">
                  <Form.Label>ToDo Description</Form.Label>
                  <Form.Control
                    as={"textarea"}
                    type="text"
                    placeholder="Enter task"
                    value={todo.description}
                    onChange={handleDescriptionChange}
                  />
                </Form.Group>

                <Container>
                  <Button type="submit">Add ToDo</Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddToDo;
