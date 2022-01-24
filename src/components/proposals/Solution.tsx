import { VFC } from 'react';
import styled from 'styled-components';

import { ElasticWrapper as SolutionWrapper, StackedCards } from '../Wrapper';
import SolutionCard from './SolutionCard';
import Vote from '../proposals/Vote';
import AddSolution from './AddSolution';

import { useQuery } from 'urql';
import { SolutionsQuery } from '../../graphql/query';
import { useRecoilValue } from 'recoil';
import { solutionIdState } from '../../atoms/modreq';

const Solution: VFC<{
  proposalId: number;
}> = (props) => {
  const solutionId = useRecoilValue(solutionIdState);

  const [result, reexecuteQuery] = useQuery({
    query: SolutionsQuery(props.proposalId),
  });
  const { data, fetching, error } = result;

  if (fetching) return <AddSolution />;
  if (error) return <p>{error.message} Solutions Data</p>;

  return data.proposal.solutions.length !== 0 ? (
    <SolutionWrapper>
      <StackedCards>
        <SolutionCard solution={data.proposal.solutions[solutionId]} />
        <DummyCard key="1" n={1}>
          &nbsp;
        </DummyCard>
        <DummyCard key="2" n={2}>
          &nbsp;
        </DummyCard>
      </StackedCards>
      <Vote />
    </SolutionWrapper>
  ) : (
    <AddSolution />
  );
};

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
