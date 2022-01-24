import { ReactChildren } from 'react';

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
  _icon?: React.ReactElement;
  _iconColor?: string;
};
export type CircleButtonProps = {
  _iconColor?: string;
  _scale?: number;
  _linkTo?: any;
  onClick?: () => void;
  children?: React.ReactElement;
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
