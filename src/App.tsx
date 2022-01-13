import { VFC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import ModReq from './components/pages/ModReq';
import Board from './components/pages/Board';

const App: VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="modreq" element={<ModReq />} />
      <Route path="board" element={<Board />} />
    </Routes>
  );
};

export default App;
