import React from 'react';
import { ListGroup, ListGroupItem, Container, Row, Col, Card } from 'react-bootstrap';
import DisplayCount from './DisplayCount';
import { useSelector } from 'react-redux'; // Import the useSelector hook
import todoReducer from '../redux/reducers/todo-reducer';

const DisplayToDo = () => {
    const todos = useSelector(state => state.todoReducer); // Replace 'todoReducer' with your actual reducer name

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
