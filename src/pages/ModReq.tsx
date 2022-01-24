import { VFC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { FullWrapper } from '../components/Wrapper';
import ProgressBar from '../components/utils/ProgressBar';
import ProblemText from '../components/proposals/ProblemText';
import Solution from '../components/proposals/Solution';
import Vote from '../components/proposals/Vote';
import AppFooter from '../components/proposals/AppFooter';

const progress = 55;

const ModReq: VFC = () => {
  const proposalId = parseInt(useParams().proposalId ?? '0');

  const [solutionId, setSolutionId] = useState(0);
  const increment = () => setSolutionId((c) => c + 1);
  const [voteFlag, setVoteFlag] = useState(false);
  const vote = () => setVoteFlag(true);
  const reset = () => {
    setSolutionId(0);
    setVoteFlag(false);
  };

  return (
    <FullWrapper>
      <ProgressBar completed={progress} margin={1} />
      <ProblemText />
      <Solution
        proposalId={proposalId}
        voteFlag={voteFlag}
        count={solutionId}
      />
      <Vote increment={increment} vote={vote} />
      <AppFooter />

      <StyledMockController
        solutionId={solutionId}
        voteFlag={voteFlag}
        reset={reset}
        proposalId={proposalId}
      />
    </FullWrapper>
  );
};

const MockController: VFC<any> = ({ className, ...props }) => {
  return (
    <div className={className}>
      <div>solutionId: [{props.solutionId}]</div>
      <div>hasVoted: [{props.voteFlag.toString()}]</div>
      <div>
        proposal:&nbsp;
        <Link to={`${props.proposalId - 1}`}>prev</Link>
        &nbsp;|&nbsp;
        <Link to={`${props.proposalId + 1}`}>next</Link>
      </div>
      <button onClick={props.reset}>reset</button>
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

export default ModReq;
