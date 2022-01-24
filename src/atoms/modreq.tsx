import { atom } from 'recoil';

export const solutionIdState = atom<number>({
  key: 'solutionIdState',
  default: 0,
});

export const voteFlagState = atom<boolean>({
  key: 'voteFlagState',
  default: false,
});
