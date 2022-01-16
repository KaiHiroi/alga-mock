import { VFC } from 'react';
import styled from 'styled-components';
import { Problem } from '../types/Types';

type Props = {
  problem: Problem;
  margin: number;
};

const ProblemText: VFC<Props> = (props) => {
  const ProblemWrapper = styled.div`
    margin: ${props.margin}rem;
  `;
  const InnerWrapper = styled.div`
    text-align: left;
    width: fit-content;
    margin: 0 auto;
    font-size: 1.2rem;
    font-weight: bold;
  `;
  const Heading = styled.div`
    color: #444;
  `;
  const Text = styled.div`
    padding-left: 1rem;
    color: #444;
  `;
  return (
    <ProblemWrapper>
      <InnerWrapper>
        <Heading>問題:</Heading>
        <Text>{props.problem.text}</Text>
      </InnerWrapper>
    </ProblemWrapper>
  );
};

export default ProblemText;
