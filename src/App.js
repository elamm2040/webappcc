import './App.css';
import List from "./componentes/listar_db";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
