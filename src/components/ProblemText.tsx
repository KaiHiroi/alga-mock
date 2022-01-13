import { VFC } from 'react';
import styled from 'styled-components';

type Problems = {
  id: number;
  text: string;
  solutions: object[];
  countLike: number;
  countUnlike: number;
};

type Props = {
  problemId: number;
};

const ProblemText: VFC<Props> = (props) => {
  const problemId = props;

  const problems = [
    {
      id: 1,
      text: 'ワイワイ感のあるPTA活動のためにどうしたらいいか',
      solutions: [],
      countLike: 0,
      countUnlike: 0,
    },
  ];

  const currentProblem: Problems = problems.find(
    (problem) => problem.id === problemId.problemId,
  ) ?? {
    id: 0,
    text: 'no problem',
    solutions: [],
    countLike: 0,
    countUnlike: 0,
  };

  const ProblemTextWrapper = styled.div`
    margin: 1rem;
  `;
  const InnerWrapper = styled.div`
    text-align: left;
    width: fit-content;
    margin: 0 auto;
    font-size: 1.1rem;
  `;
  const Text = styled.div`
    padding-left: 1rem;
  `;
  return (
    <ProblemTextWrapper>
      <InnerWrapper>
        <div>問題:</div>
        <Text>{currentProblem.text}</Text>
      </InnerWrapper>
    </ProblemTextWrapper>
  );
};

export default ProblemText;
