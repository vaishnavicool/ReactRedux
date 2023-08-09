import './App.css';
import AddToDo from './components/AddToDo';
import DisplayToDo from './components/DisplayToDo';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
<Container> <AddToDo/>
   <DisplayToDo/></Container>
    </Provider>
   
      
  
  );
}

export default App;
