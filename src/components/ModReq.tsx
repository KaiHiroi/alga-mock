import { VFC } from 'react';
import styled from 'styled-components';

import ProgressBar from './ProgressBar';
import ProblemText from './ProblemText';
import ProblemSolutions from './ProblemSolutions';
import ButtonDislike from './buttons/ButtonDisagree';
import ButtonLike from './buttons/ButtonAgree';
import ProblemFooter from './ProblemFooter';

const ModReqWrapper = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: white;
`;
const VoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;
const ProblemTextWrapper = styled.div`
  text-align: left;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  background-color: gray;
`;
const SolutionCards = styled.div`
  flex: 1 1 0%;
  padding: 0 1.5rem;
  margin-top: 1.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
`;

const ModReq: VFC = () => {
  // Dummy params
  const progress = 40;
  const problemId = 1;

  return (
    <ModReqWrapper>
      <ProgressBar completed={progress} />
      <ProblemTextWrapper>
        <ProblemText problemId={problemId} />
      </ProblemTextWrapper>
      <SolutionCards>
        <ProblemSolutions problemId={problemId} />
      </SolutionCards>
      <VoteWrapper>
        <ButtonDislike />
        <ButtonLike />
      </VoteWrapper>
      <FooterWrapper>
        <ProblemFooter />
      </FooterWrapper>
    </ModReqWrapper>
  );
};

export default ModReq;
