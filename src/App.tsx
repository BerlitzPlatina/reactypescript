import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';
import { publicRouters, TypeRoute } from './routers';

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {publicRouters.map((route: TypeRoute, index: number) => {
          const Page = route.component
          return <Route key={index} path={route.path} element={<Page/>}></Route>
        })}
      </Routes>
    </div>
  );
}

export default App;
