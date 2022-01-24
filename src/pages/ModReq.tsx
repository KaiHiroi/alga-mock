import { VFC } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FullWrapper } from '../components/Wrapper';
import ProgressBar from '../components/utils/ProgressBar';
import ProblemText from '../components/proposals/ProblemText';
import Solution from '../components/proposals/Solution';
import AppFooter from '../components/proposals/AppFooter';
import { useRecoilState } from 'recoil';
import { solutionIdState, voteFlagState } from '../atoms/modreq';

const progress = 55;

const ModReq: VFC = () => {
  const proposalId = parseInt(useParams().proposalId ?? '0');

  return (
    <FullWrapper>
      <ProgressBar completed={progress} margin={1} />
      <ProblemText />
      <Solution proposalId={proposalId} />
      <AppFooter />

      <MockController proposalId={proposalId} />
    </FullWrapper>
  );
};

const MockController: VFC<any> = (props) => {
  const [solutionId, setSolutionId] = useRecoilState(solutionIdState);
  const [voteFlag, setVoteFlag] = useRecoilState(voteFlagState);
  const reset = () => {
    setSolutionId(0);
    setVoteFlag(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        padding: '1rem',
        backgroundColor: 'lime',
      }}
    >
      <div>solutionId: [{solutionId}]</div>
      <div>hasVoted: [{voteFlag.toString()}]</div>
      <div>
        proposal:&nbsp;
        <Link to={`${props.proposalId - 1}`}>prev</Link>
        &nbsp;|&nbsp;
        <Link to={`${props.proposalId + 1}`}>next</Link>
      </div>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default ModReq;
