import { VFC } from 'react';
import styled from 'styled-components';

import SolutionCard from './SolutionCard';
import AddSolution from './AddSolution';

import { useQuery } from 'urql';
import { SolutionsQuery } from '../../graphql/query';

const Solution: VFC<{
  proposalId: number;
  voteFlag: boolean;
  count: number;
}> = (props) => {
  const [result, reexecuteQuery] = useQuery({
    query: SolutionsQuery(props.proposalId),
  });
  const { data, fetching, error } = result;

  if (fetching) return <AddSolution />;
  if (error) return <p>{error.message} Solutions Data</p>;

  return data.proposal.solutions.length !== 0 ? (
    <Wrapper>
      <StackedCards>
        <SolutionCard
          voteFlag={props.voteFlag}
          solution={data.proposal.solutions[props.count]}
        />
        <DummyCard key="1" n={1}>
          &nbsp;
        </DummyCard>
        <DummyCard key="2" n={2}>
          &nbsp;
        </DummyCard>
      </StackedCards>
    </Wrapper>
  ) : (
    <>
      <AddSolution />
    </>
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
