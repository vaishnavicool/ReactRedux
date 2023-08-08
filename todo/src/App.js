import './App.css';
import AddToDo from './components/AddToDo';
import DisplayToDo from './components/DisplayToDo';
import { Container } from 'react-bootstrap';

function App() {
  return (
   <Container> <AddToDo/>
   <DisplayToDo/></Container>
      
  
  );
}

export default App;
