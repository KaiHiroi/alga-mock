import { VFC } from 'react';

const ButtonLike: VFC = () => {
  return (
    <button className="w-14 h-14 leading-14 rounded-full bg-white hover:bg-slate-50 drop-shadow-2xl text-3xl text-teal-400">
      ♥
    </button>
  );
};

export default ButtonLike;
