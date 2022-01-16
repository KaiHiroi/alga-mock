import { VFC } from 'react';
import styled from 'styled-components';
import { GiCycle } from 'react-icons/gi';
import { FaPen } from 'react-icons/fa';
import { proposal1 } from '../data';
import { Solution, Proposal } from '../types/Types';

type Props = {
  solutionId: number;
};

const dummyProposal: Proposal = {
  problem: { id: 0, text: '' },
  harm: 'harm0',
  cause: 'cause0',
  solutions: [],
};

const dummySolutions: Solution[] = [
  {
    law: 'dummy solution',
    to: 0,
    since: new Date(),
    until: new Date(),
    amount: 0,
    members: [],
  },
  {
    law: 'dummy solution',
    to: 0,
    since: new Date(),
    until: new Date(),
    amount: 0,
    members: [],
  },
];
const currentProposal: Proposal = proposal1 ?? dummyProposal;

const ProblemSolutions: VFC<Props> = (props) => {
  const solutionId = props.solutionId;
  const currentSolution: Solution =
    currentProposal?.solutions?.[solutionId] ?? dummySolutions[0];
  console.log(currentSolution);

  const currentSolutionMember =
    currentSolution.members?.length !== 0
      ? currentSolution.members?.map((v) => v.address)
      : 'なし';
  console.log('member');
  console.log(currentSolutionMember);

  return (
    <>
      <SolutionCardLi>
        <SolutionId>
          ソリューション{solutionId + 1}/{currentProposal.solutions!.length}
        </SolutionId>
        <SolutionMain>
          <InnerWrapper>
            <Heading>追加するルール</Heading>
            <Text>{nToBr(currentSolution.law ?? 'なし')}</Text>
            <Heading>部会と予算</Heading>
            <Text>
              <div>
                部会:&nbsp;
                {currentSolutionMember === 'なし'
                  ? 'なし'
                  : currentSolutionMember?.join('、')}
              </div>
              <div>
                予算:&nbsp;
                {currentSolution.amount === 0 ? 'なし' : currentSolution.amount}
              </div>
            </Text>
          </InnerWrapper>
        </SolutionMain>
        <SolutionStatus>
          {/* <StyledCycle /> */}
          <StyledPen />
          この解決策をベースに修正提案
        </SolutionStatus>
      </SolutionCardLi>
      <SolutionCardLi>
        <SolutionId>
          ソリューション{solutionId + 1}/{currentProposal.solutions!.length}
        </SolutionId>
        <SolutionMain>
          <InnerWrapper>
            <Heading>追加するルール</Heading>
            <Text>{currentSolution.law}</Text>
            <Heading>部会と予算</Heading>
            <Text>
              <div>
                部会:&nbsp;
                {currentSolutionMember === 'なし'
                  ? 'なし'
                  : currentSolutionMember?.join('、')}
              </div>
              <div>
                予算:&nbsp;
                {currentSolution.amount === 0 ? 'なし' : currentSolution.amount}
              </div>
            </Text>
          </InnerWrapper>
        </SolutionMain>
        <SolutionStatus>
          {/* <StyledCycle /> */}
          <StyledPen />
          この解決策をベースに修正提案
        </SolutionStatus>
      </SolutionCardLi>
      <SolutionCardLi>
        <SolutionId>
          ソリューション{solutionId + 1}/{currentProposal.solutions!.length}
        </SolutionId>
        <SolutionMain>
          <InnerWrapper>
            <Heading>追加するルール</Heading>
            <Text>{currentSolution.law}</Text>
            <Heading>部会と予算</Heading>
            <Text>
              <div>
                部会:&nbsp;
                {currentSolutionMember === 'なし'
                  ? 'なし'
                  : currentSolutionMember?.join('、')}
              </div>
              <div>
                予算:&nbsp;
                {currentSolution.amount === 0 ? 'なし' : currentSolution.amount}
              </div>
            </Text>
          </InnerWrapper>
        </SolutionMain>
        <SolutionStatus>
          {/* <StyledCycle /> */}
          <StyledPen />
          この解決策をベースに修正提案
        </SolutionStatus>
      </SolutionCardLi>
    </>
  );
};

const SolutionCardLi = styled.li`
  background-color: white;
  position: absolute;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0 8px 5px rgb(0 0 0 / 0.1));
  :nth-child(1) {
    transform: scale(1) translateY(0);
    z-index: 3;
  }
  :nth-child(2) {
    transform: scale(0.96) translateY(4.5%);
    z-index: 2;
  }
  :nth-child(3) {
    transform: scale(0.94) translateY(8%);
    z-index: 1;
  }
  :not(:first-child) {
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const SolutionId = styled.div`
  color: gray;
  padding: 0.35rem 0;
  box-shadow: 0 2px 5px lightgray;
`;
const SolutionMain = styled.div`
  flex: 0 0 1;
  overflow-y: auto;
  font-size: 1.1rem;
`;
const SolutionStatus = styled.div`
  color: gray;
  padding: 0.3rem 0;
  box-shadow: 0 -2px 5px lightgray;
`;
const StyledCycle = styled(GiCycle)`
  margin-right: 0.3rem;
`;
const StyledPen = styled(FaPen)`
  margin-right: 0.3rem;
`;
const InnerWrapper = styled.div`
  text-align: left;
  width: fit-content;
  margin: 0 auto;
`;
const Heading = styled.h3`
  color: #555;
`;
const Text = styled.div`
  padding-left: 1rem;
  color: #333;
  margin-bottom: 3rem;
`;
const nToBr = (txt: string) => {
  return txt.split(/(\n)/g).map((t) => (t === '\n' ? <br /> : t));
};

export default ProblemSolutions;
