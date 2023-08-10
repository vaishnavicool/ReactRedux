import React from 'react'
import { Card } from 'react-bootstrap'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'


const DisplayCount = ()=> {

  const todo = useSelector(state=> state.todoReducer)
  return (
    <Card>
        <Card.Body>
            <h4>
{todo.length}
            </h4>
        </Card.Body>
    </Card>
  )
}

export default DisplayCount