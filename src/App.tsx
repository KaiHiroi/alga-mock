import { VFC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ModReq from './pages/ModReq';
import Board from './pages/Board';

const App: VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modreq" element={<ModReq />}>
        <Route path=":proposalId" element={<ModReq />} />
        <Route path=":proposalId/new" element={<ModReq />} />
      </Route>
      <Route path="/board" element={<Board />}>
        <Route path=":proposalId" element={<Board />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
