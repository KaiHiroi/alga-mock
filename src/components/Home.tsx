import { VFC } from 'react';

import Header from './Header';
import Footer from './Footer';

const App: VFC = () => {
  return (
    <>
      <Header />
      <div className="w-full text-center">
        <h1 className="text-6xl font-bold items-center">Alga</h1>
        <p>self-reproductive micro-public</p>
        <button>Launch App</button>
      </div>
      <Footer />
    </>
  );
};

export default App;
