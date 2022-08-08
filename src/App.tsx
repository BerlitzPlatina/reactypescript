import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
