import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CounterApp from './Pages/CounterApp';
import TodoApp from './Pages/TodoApp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<CounterApp/>} />
        <Route path='/todos' element={<TodoApp/> } />
      </Routes>
    </div>
  );
}

export default App;
