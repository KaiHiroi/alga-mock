import { VFC } from 'react';
import { Link } from 'react-router-dom';

const Header: VFC = () => {
  return (
    <header className="w-full flex flex-col bg-lime-600">
      <div className="flex justify-between">
        <div>Alga</div>
        <div>
          <Link to="/">HOME</Link>
          <Link to="modreq">App</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
