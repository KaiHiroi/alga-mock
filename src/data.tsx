import './types/Types';
import { Member, Problem, Proposal, Solution } from './types/Types';

const date1 = new Date(1995, 11, 17);
const date2 = new Date(2022, 0, 1);

const member1: Member = {
  id: 1,
  address: '0xMEMBER1_dfkjhu4',
};
const member2: Member = {
  id: 2,
  address: '0xMEMBER2_iusganvu',
};

const solution1_1: Solution = {
  law: 'sol1-1 law',
  to: 1,
  since: date1,
  until: date2,
  amount: 100,
  members: [member1, member2],
};
const solution1_2: Solution = {
  law: 'sol1-2 law',
  to: 23,
  since: date1,
  until: date2,
  amount: 100,
  members: [member2],
};

const problem1: Problem = {
  id: 1,
  text: 'ワイワイ感のあるPTA活動のためにどうしたらいいか(problem1)',
};
export const proposal1: Proposal = {
  problem: problem1,
  harm: 'harm1',
  cause: 'cause1',
  solutions: [solution1_1, solution1_2],
  // solutions: [],
};
