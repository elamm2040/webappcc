import logo from './logo.svg';
import './App.css';
import  List from "./componentes/listar_db";
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" component={List}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
