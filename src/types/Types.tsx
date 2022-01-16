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
  problem: string;
  harm?: string;
  cause?: string;
  solutions?: Solution[];
};
export type Solution = {
  law?: string;
  to?: number;
  since?: Date;
  until?: Date;
  amount?: number;
  members?: member[];
};
export type problem = {
  id: number;
  text: string;
};
export type member = {
  id: number;
  address: number;
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

// Types for UI dev
export type ButtonWithIcon = {
  button: string;
  icon: string;
  text: string;
};
export type RoundedButtonProps = {
  _text?: string;
  _linkTo?: string;
  _isActive?: boolean;
  _Icon?: React.ReactElement;
};

export type Problems = {
  id: number;
  text: string;
  solutions: {
    id: number;
    addingRules: string;
    subCommitteeAndBudget: string;
    countDislike: number;
    countLike: number;
  }[];
};

export type ProgressBarProps = {
  completed: number;
  margin: number;
};
