import { VFC } from 'react';
import styled from 'styled-components';

import _ProgressBar from '../utils/ProgressBar';
import ProblemText from '../ProblemText';
import ProblemSolutionsCard from '../ProblemSolutionsCard';
import {
  RedCrossCircleButton as DisagreeButton,
  GreenHeartCircleButton as AgreeButton,
} from '../buttons';
import AppFooter from '../AppFooter';

const ModReqWrapper = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const ProgressBar = styled(_ProgressBar)`
  margin: 1rem;
`;
const SolutionCards = styled.div`
  flex: 1 1 0%;
  margin: 1rem 1.5rem 2rem;
  background-color: white;
  /* display: flex;
  flex-direction: column; */
  /* overflow-y: hidden; */
  /* filter: drop-shadow(0 8px 5px rgb(0 0 0 / 0.8)); */
  position: relative;
`;
const VoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 3rem;
  gap: 0 6rem;
`;

const ModReq: VFC = () => {
  // Dummy params
  const progress = 35;
  const problemId = 1;

  return (
    <ModReqWrapper>
      <ProgressBar completed={progress} margin={1} />
      <ProblemText problemId={problemId} />
      <SolutionCards>
        <ProblemSolutionsCard problemId={problemId} />
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
