import { VFC } from 'react';
import styled from 'styled-components';
import { Problems } from '../types/Types';
import { GiCycle } from 'react-icons/gi';
import { FaPen } from 'react-icons/fa';

type Props = {
  problemId: number;
};

const ProblemSolutions: VFC<Props> = (props) => {
  const problemId = props;

  const problems: Problems[] = [
    {
      id: 1,
      text: 'プロブレム１',
      solutions: [
        {
          id: 1,
          text: '毎回Zoomに接続しながらboardを使う。',
          countDislike: 0,
          countLike: 0,
        },
      ],
    },
  ];
  const currentProblem = problems.find((problem) => {
    return problem.id === problemId.problemId;
  }) ?? {
    id: 0,
    text: 'no problem',
    solutions: [],
  };

  const currentSolution = currentProblem.solutions.find((solution) => {
    return solution.id === 1;
  }) ?? {
    id: 0,
    text: 'solution 0',
    countDislike: 0,
    countLike: 0,
  };

  const SolutionId = styled.div`
    color: gray;
    padding: 0.25rem 0;
    box-shadow: 0 2px 5px lightgray;
  `;
  const SolutionMain = styled.div`
    flex: 0 0 1;
    overflow-y: auto;
    font-size: 1.1rem;
  `;
  const SolutionStatus = styled.div`
    color: gray;
    padding: 0.25rem 0;
    box-shadow: 0 -2px 5px lightgray;
  `;
  const StyledCycle = styled(GiCycle)`
    margin-right: 0.3rem;
  `;
  const StyledPen = styled(FaPen)`
    margin-right: 0.3rem;
  `;
  const InnerWrapper = styled.div`
    text-align: left;
    width: fit-content;
    margin: 0 auto 3rem;
  `;
  const Heading = styled.h3`
    color: #555;
  `;
  const Text = styled.div`
    padding-left: 1rem;
    color: #333;
  `;
  return (
    <>
      <SolutionId>ソリューション{currentSolution.id}</SolutionId>
      <SolutionMain>
        <InnerWrapper>
          <Heading>追加するルール</Heading>
          <Text>{currentSolution.text}</Text>
        </InnerWrapper>
        <InnerWrapper>
          <Heading>部会と予算</Heading>
          <Text>
            {currentSolution.text}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            aaa
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            aaa
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            aaa
          </Text>
        </InnerWrapper>
      </SolutionMain>
      <SolutionStatus>
        {/* <StyledCycle /> */}
        <StyledPen />
        この解決策をベースに修正提案
      </SolutionStatus>
    </>
  );
};

export default ProblemSolutions;
