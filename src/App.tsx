import React, { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';
import { publicRouters, TypeRoute } from './routers';

export type ICheckLogin = {
  isLogin: boolean
}
export const CheckLogin = React.createContext<ICheckLogin>({
  isLogin: true,
})
function getToken() {
  const tokenString = sessionStorage.getItem('token');
  return tokenString ? JSON.parse(tokenString) : ''
}
function App() {
  const [token, setToken] = useState(getToken());
  if(!token) {
    return <Login setToken={setToken} />
  } else {
    sessionStorage.setItem('token', JSON.stringify(token));
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
