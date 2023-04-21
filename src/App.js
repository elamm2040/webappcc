import './App.css';
import List from "./componentes/listar_db";
import Add from "./componentes/add_shift";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add_shift" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
