import './types/Types';
import { Member, Problem, Proposal, Solution } from './types/Types';

const date1 = new Date(1995, 11, 17);
const date2 = new Date(2022, 0, 1);

const member1: Member = {
  id: 1,
  address: 'ワークショップ部会',
};
const member2: Member = {
  id: 2,
  address: '0xMEMBER2_iusganvu',
};

const solution1_1: Solution = {
  law: '隔週ワークショップを開催する。\n\n予算は1回2500円で、模造紙、ペン、付箋などをなくなり次第買い足す形で用意する。\n\nワークショップ部会を新設し予算管理をする。board機能と併用し、リモート参加と同期する。',
  to: 1,
  since: date1,
  until: date2,
  amount: 100,
  members: [member1, member2],
};
const solution1_2: Solution = {
  law: '毎回Zoomに接続しながらboardを使う。',
  to: 23,
  since: date1,
  until: date2,
  amount: 0,
  members: [],
};

const problem1: Problem = {
  id: 1, // いらない？
  text: 'ワイワイ感のあるPTA活動のためにどうしたらいいか',
};
export const proposal1: Proposal = {
  problem: problem1,
  harm: 'harm1',
  cause: 'cause1',
  solutions: [solution1_1, solution1_2],
  // solutions: [],
};
