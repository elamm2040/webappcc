import './App.css';
import List from "./componentes/listar_db";
import AddShift from "./componentes/addShift/add-shift";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SelectWard from './componentes/selectWard/select-ward';
import SignCandidate from './componentes/signCandidate/sign-candidate';
import GetApproval from './componentes/getApproval/get-approval';
import Approve from './componentes/approve/approve';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add_shift" element={<AddShift />} />
        <Route path="/select_ward" element={<SelectWard />} />
        <Route path="/sign_candidate" element={<SignCandidate />} />
        <Route path="/get_approval" element={<GetApproval />} />
        <Route path="/approve" element={<Approve />} />
      </Routes>
    </Router>
  );
}

export default App;
