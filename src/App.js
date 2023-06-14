import './App.css';
import List from "./componentes/listar_db";
import AddShift from "./componentes/addShift/add-shift";
import EditShift from "./componentes/editShift/edit-shift";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SelectWard from './componentes/selectWard/select-ward';
import SignCandidate from './componentes/signCandidate/sign-candidate';
import GetApproval from './componentes/getApproval/get-approval';
import Approve from './componentes/approve/approve';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addOnLineValue } from './app/features/on-line';

function App() {
  const onLineRedux = useSelector(state => state.onLine.value);
  const dispatch = useDispatch();

  useEffect(() => {
    var intervalId = setInterval(onLineCache, 500, checkNavigatorOnLine());
  }, [onLineRedux]);

  function checkNavigatorOnLine() {
    return window.navigator.onLine;
  }

  function onLineCache(onLine) {
    dispatch(addOnLineValue(onLine));
    //todo: terminar el guardado
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add_shift" element={<AddShift />} />
        <Route path="/edit_shift" element={<EditShift />} />
        <Route path="/select_ward" element={<SelectWard />} />
        <Route path="/sign_candidate" element={<SignCandidate />} />
        <Route path="/get_approval" element={<GetApproval />} />
        <Route path="/approve" element={<Approve />} />
      </Routes>
    </Router>
  );
}

export default App;
