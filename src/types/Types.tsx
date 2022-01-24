// Types from Alga
enum PropType {
  ACK,
  KICK,
  FLOW,
  SLASH,
  LAW,
  SUB,
}
export type Proposal = {
  // id: number;
  problem: Problem;
  harm?: string;
  cause?: string;
  solutions?: Solution[];
};
export type Solution = {
  id?: number;
  law?: string;
  to?: number;
  since?: Date;
  until?: Date;
  amount?: number;
  members?: Member[];
};
export type Problem = {
  id: number;
  text: string;
};
export type Member = {
  id: number;
  address: string;
};

export type ProposeProps = { propType: PropType; proposal: Proposal };
export type VoteProps = { pid: number; decision: number };
export type ModreqProps = { pid: number; proposal: Proposal };
export type VoteModreqProps = { rid: number; decision: number };
export type DonateProps = { token: string; amount: number };
export type WithdrawProps = { token: string; amount: number };

// function propose(propType, proposal)
// function vote(pid, decision)
// function modreq(pid, proposal)
// function voteModreq(rid, decision)
// function donate(token,amount) payable
// function withdraw(token,amount) nonReentrant
