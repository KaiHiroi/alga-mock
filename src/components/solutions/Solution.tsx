import { VFC } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import SolutionCard from './SolutionCard';
import AddSolution from './AddSolution';

import { CircleButton } from '../buttons';
import { ImCross, ImHeart } from 'react-icons/im';

import { useQuery } from 'urql';
import { SolutionsQuery } from '../../graphql/query';

const Solution: VFC = () => {
  const proposalId = parseInt(useParams().proposalId ?? '0');

  const [result, reexecuteQuery] = useQuery({
    query: SolutionsQuery(proposalId),
  });
  const { data, fetching, error } = result;

  if (fetching) return <AddSolution />;
  if (error) return <p>{error.message} Solutions Data</p>;

  return data.proposal.solutions.length !== 0 ? (
    <Wrapper>
      <StackedCards>
        <SolutionCard {...data.proposal.solutions[0]} />
        <DummyCard n={1}>&nbsp;</DummyCard>
        <DummyCard n={2}>&nbsp;</DummyCard>
      </StackedCards>
      <VoteWrapper>
        <CircleButton _icon={<ImCross />} _iconColor="#e55" />
        <CircleButton _icon={<ImHeart />} _iconColor="#6edc9a" />
      </VoteWrapper>
    </Wrapper>
  ) : (
    <AddSolution />
  );
};

const Wrapper = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
`;
const StackedCards = styled.div`
  flex: 1 1 0%;
  margin: 0 1.5rem;
  padding-top: 1rem;
  position: relative;
`;
const VoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 6rem;
  padding: 4rem 0 3.5rem;
`;
const DummyCard = styled.div<{ n: number }>`
  position: absolute;
  background-color: white;
  width: ${(p) => 100 - p.n * 3}%;
  z-index: ${(p) => -p.n};
  left: ${(p) => p.n * 1.5}%;
  bottom: ${(p) => -p.n * 2.5}%;
  box-shadow: 0 5px 15px #ddd;
`;

export default Solution;
