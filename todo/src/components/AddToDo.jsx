import React, { useState } from "react";
import { Card, Col, Row, Container, Form, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { addTodo } from '../redux/actions/todo';
import { v4 as uuidv4 } from 'uuid';

const AddToDo = () => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new todo object with the id field using uuidv4
    const newTodo = {
      ...todo,
      id: uuidv4()
    };
    // Dispatch the action using the useDispatch hook
    dispatch(addTodo(newTodo));
    setToDo({
      title: '',
      description: '',
      id: ''
    });
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h3>Add ToDo here!!</h3>
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
