import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import DisplayCount from "./DisplayCount";
import { deleteTodo } from "../redux/actions/todo"; // Import the correct deleteTodo action
import { v4 as uuidv4 } from "uuid";

const DisplayToDo = () => {
  const todos = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // Dispatch the deleteTodo action with the todo's id
    dispatch(deleteTodo(id));
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h3>Added ToDos are here!!</h3>
              <DisplayCount />
              <ListGroup>
                {todos.map((todo, index) => (
                  <ListGroupItem key={index}>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                    {/* Pass the todo's id to the handleDelete function */}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Delete
                    </Button>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayToDo;
