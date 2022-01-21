import { VFC } from 'react';
import styled from 'styled-components';

import ProgressBar from '../components/utils/ProgressBar';
import ProblemText from '../components/ProblemText';
import Solution from '../components/Solution';
import AppFooter from '../components/AppFooter';

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
      <ProblemText />
      <Solution />
      <AppFooter />
    </ModReqWrapper>
  );
};

export default ModReq;
