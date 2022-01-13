import { VFC } from 'react';
import { Link } from 'react-router-dom';

const Header: VFC = () => {
  return (
    <div className="flex justify-between">
      <div>Alga</div>
      <div>
        <Link to="/">HOME</Link>
        <Link to="modreq">App</Link>
      </div>
    </div>
  );
};

export default Header;
