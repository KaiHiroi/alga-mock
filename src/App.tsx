import { VFC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { createClient, Provider, defaultExchanges } from 'urql';
import { devtoolsExchange } from '@urql/devtools';

import Home from './pages/Home';
import ModReq from './pages/ModReq';
import Board from './pages/Board';

const client = createClient({
  url: 'http://localhost:4000/graphql',
  exchanges: [devtoolsExchange, ...defaultExchanges],
});

const App: VFC = () => {
  return (
    <Provider value={client}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modreq" element={<ModReq />}>
          <Route path=":proposalId" element={<ModReq />} />
        </Route>
        <Route path="/board" element={<Board />}>
          <Route path=":proposalId" element={<Board />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
