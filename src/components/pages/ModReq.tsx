import { VFC } from 'react';
import styled from 'styled-components';

import ProgressBar from '../utils/ProgressBar';
import ProblemText from '../ProblemText';
import ProblemSolutions from '../ProblemSolutions';
import {
  RedCrossCircleButton as DisagreeButton,
  GreenHeartCircleButton as AgreeButton,
} from '../buttons';
import AppFooter from '../AppFooter';

const ModReqWrapper = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const ProgressBarWrapper = styled.div`
  margin: 1rem;
`;
const ProblemTextWrapper = styled.div``;
const SolutionCards = styled.div`
  flex: 1 1 0%;
  padding: 0 1.5rem;
  margin: 1.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
`;
const VoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  gap: 0 6rem;
`;

const ModReq: VFC = () => {
  // Dummy params
  const progress = 40;
  const problemId = 1;

  return (
    <ModReqWrapper>
      <ProgressBarWrapper>
        <ProgressBar completed={progress} />
      </ProgressBarWrapper>
      <ProblemTextWrapper>
        <ProblemText problemId={problemId} />
      </ProblemTextWrapper>
      <SolutionCards>
        <ProblemSolutions problemId={problemId} />
      </SolutionCards>
      <VoteWrapper>
        <DisagreeButton />
        <AgreeButton />
      </VoteWrapper>
      <AppFooter />
    </ModReqWrapper>
  );
};

export default ModReq;
