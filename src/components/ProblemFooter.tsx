import { VFC } from 'react';
import { useLocation } from 'react-router-dom';

import ButtonModReq from './buttons/ButtonModReq';
import ButtonBoard from './buttons/ButtonBoard';

const ProblemFooter: VFC = () => {
  const location = useLocation();
  const matchPath = (path: string) => {
    return location.pathname === path;
  };

  const activeStyles = {
    button:
      'rounded-full bg-teal-100 hover:bg-teal-200 text-xl flex m-3 px-3 py-2',
    icon: 'text-slate-500 text-3xl mr-1',
    text: 'text-teal-500 font-bold',
  };

  const styles = {
    button: 'rounded-full bg-white hover:bg-slate-100 flex m-3 px-3 py-2',
    icon: 'text-slate-500 text-3xl mr-1',
    text: 'text-slate-400 text-xl',
  };

  return (
    <>
      <ButtonModReq {...(matchPath('/modreq') ? activeStyles : styles)} />
      <div className="border-solid border-2 border-slate-200 my-4"></div>
      <ButtonBoard {...(matchPath('/board') ? activeStyles : styles)} />
    </>
  );
};

export default ProblemFooter;
