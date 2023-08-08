import React, { useState } from 'react'
import { ListGroup, ListGroupItem, Container,Row,Col,Card } from 'react-bootstrap'
import DisplayCount from './DisplayCount'

const DisplayToDo = () => {

  const[todos,setTodos]=useState([
    {
      title:"1",
      description:"vk"
    },
    {
      title:"2",
      description:"vk2"
    },

  ])
  return (
       <Container>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h3>Add ToDos are here!!</h3>
              <DisplayCount/>
              <ListGroup>
                { 
                todos.map((todo,index)=>(
<ListGroupItem key={index}>
<h4>{todo.title}</h4>
<p>{todo.description}</p>
</ListGroupItem>
                  ))
                  }
              </ListGroup>
             
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default DisplayToDo
