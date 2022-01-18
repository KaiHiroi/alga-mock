import { VFC } from 'react';
import styled from 'styled-components';

import ProgressBar from '../utils/ProgressBar';
import ProblemText from '../ProblemText';
import SolutionCard from '../Solution';
import AddSolution from '../AddSolution';
import AppFooter from '../AppFooter';

import { proposal1 } from '../../data';

const solutionExists = () => {
  return proposal1.solutions?.length !== 0;
};

const ModReqWrapper = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ModReq: VFC = () => {
  // Dummy params
  const progress = 35;

  return (
    <ModReqWrapper>
      <ProgressBar completed={progress} margin={1} />
      <ProblemText problem={proposal1.problem} margin={0.75} />
      <Solution solutionExists={solutionExists()} />
      <AppFooter />
    </ModReqWrapper>
  );
};

const Solution: VFC<{ solutionExists: boolean }> = (props) => {
  return props.solutionExists ? <SolutionCard /> : <AddSolution />;
};

export default ModReq;
