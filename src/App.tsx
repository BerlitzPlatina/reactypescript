import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';
import { publicRouters, TypeRoute } from './routers';

function App() {
  return (
    <div className="App">
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
