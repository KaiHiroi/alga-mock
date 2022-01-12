import { VFC } from 'react';
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

  console.log(currentSolution);

  return (
    <>
      <div className="border-b-2 border-solid">
        ソリューション{currentSolution.id}
      </div>
      <div className="border-b-2 border-solid flex-1 overflow-y-auto">
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
      </div>
      <div>この解決策をベースに修正提案</div>
    </>
  );
};

export default ProblemSolutions;
