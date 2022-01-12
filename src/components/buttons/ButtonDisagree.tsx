import { VFC } from 'react';

const ButtonDislike: VFC = () => {
  return (
    <button className="w-14 h-14 rounded-full bg-white hover:bg-slate-50 drop-shadow-2xl text-5xl text-red-400 font-bold mr-24">
      ×
    </button>
  );
};

export default ButtonDislike;
