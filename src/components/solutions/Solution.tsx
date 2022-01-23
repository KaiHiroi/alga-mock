import { useState, VFC } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

import SolutionCard from './SolutionCard';
import AddSolution from './AddSolution';

import { CircleButton } from '../buttons';
import { ImCross, ImHeart } from 'react-icons/im';

import { useQuery } from 'urql';
import { SolutionsQuery } from '../../graphql/query';

const Solution: VFC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const [voteFlag, setVoteFlag] = useState(false);
  const vote = () => setVoteFlag(true);
  const reset = () => {
    setCount(0);
    setVoteFlag(false);
  };

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
        <SolutionCard
          voteFlag={voteFlag}
          solution={data.proposal.solutions[count]}
        />
        <DummyCard key="1" n={1}>
          &nbsp;
        </DummyCard>
        <DummyCard key="2" n={2}>
          &nbsp;
        </DummyCard>
      </StackedCards>
      <VoteWrapper>
        <CircleButton _iconColor="#e55" onClick={increment}>
          <ImCross />
        </CircleButton>
        <CircleButton _iconColor="#6edc9a" onClick={vote}>
          <ImHeart />
        </CircleButton>
      </VoteWrapper>
      <StyledMockController
        count={count}
        voteFlag={voteFlag}
        reset={reset}
        proposalId={proposalId}
      />
    </Wrapper>
  ) : (
    <>
      <StyledMockController
        count={count}
        voteFlag={voteFlag}
        reset={reset}
        proposalId={proposalId}
      />
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

const MockController: VFC<any> = ({ className, ...props }) => {
  return (
    <div className={className}>
      <div>
        count:{props.count}, vote:{props.voteFlag}
      </div>
      <Link to={`${props.proposalId - 1}`}>prev</Link>
      <button onClick={props.reset}>reset</button>
      <Link to={`${props.proposalId + 1}`}>next</Link>
    </div>
  );
};
const StyledMockController = styled(MockController)`
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  background-color: lime;
`;

export default Solution;
