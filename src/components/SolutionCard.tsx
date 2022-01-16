import { VFC } from 'react';
import styled from 'styled-components';

import ProblemSolutionsCard from './ProblemSolutionsCard';
import { CircleButton } from './buttons';

import { proposal1 } from '../data';
import { ImCross, ImHeart } from 'react-icons/im';
console.log(proposal1);

const Solution: VFC = () => {
  return (
    <SolutionWrapper>
      <SolutionCards>
        <ProblemSolutionsCard solutionId={0} />
      </SolutionCards>
      <VoteWrapper>
        <CircleButton _icon={<ImCross />} _iconColor="#e55" />
        <CircleButton _icon={<ImHeart />} _iconColor="#6edc9a" />
      </VoteWrapper>
    </SolutionWrapper>
  );
};

const SolutionWrapper = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
`;
const SolutionCards = styled.div`
  flex: 1 1 0%;
  margin: 1rem 1.5rem 2rem;
  position: relative;
`;
const VoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 3rem;
  gap: 0 6rem;
`;

export default Solution;
