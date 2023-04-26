import './App.css';
import List from "./componentes/listar_db";
import AddShift from "./componentes/addShift/add-shift";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SelectWard from './componentes/selectWard/select-ward';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add_shift" element={<AddShift />} />
        <Route path="/select_ward" element={<SelectWard />} />
      </Routes>
    </Router>
  );
}

export default App;
