import './App.css';
import List from "./componentes/listar_db";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
