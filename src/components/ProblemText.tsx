import { VFC } from 'react';

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

  const currentProblem: Problems | undefined = problems.find(
    (problem) => problem.id === problemId.problemId,
  );

  return (
    <>
      <div>問題:</div>
      <p>
        {currentProblem === undefined ? 'non problem' : currentProblem.text}
      </p>
    </>
  );
};

export default ProblemText;
