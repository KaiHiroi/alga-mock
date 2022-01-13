import { VFC } from 'react';
import styled from 'styled-components';
import { Problems } from '../types/Types';

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
    border-bottom: 2px solid lightgray;
    color: gray;
  `;
  const SolutionMain = styled.div`
    border-bottom: 2px solid lightgray;
    flex: 0 0 1;
    overflow-y: auto;
    font-size: 1.1rem;
  `;
  const SolutionStatus = styled.div`
    color: gray;
  `;
  return (
    <>
      <SolutionId>ソリューション{currentSolution.id}</SolutionId>
      <SolutionMain>
        <div>
          <div>追加するルール</div>
          {currentSolution.text}
        </div>
        <div>
          <div>部会と予算</div>
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
        </div>
      </SolutionMain>
      <SolutionStatus>この解決策をベースに修正提案</SolutionStatus>
    </>
  );
};

export default ProblemSolutions;
