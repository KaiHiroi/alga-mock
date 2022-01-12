import { VFC } from 'react';
import './ProblemSolutions.css';

type Problems = {
  id: number;
  text: string;
  solution: object[];
  countLike: number;
  countUnlike: number;
};

type Props = {
  problemId: number;
};

const ProblemSolutions: VFC<Props> = (props) => {
  const problemId = props;

  const problems = [
    {
      id: 1,
      text: 'ソリューション',
      solution: [],
      countLike: 0,
      countUnlike: 0,
    },
  ];

  const currentProblem: Problems | undefined = problems.find(
    (problem) => problem.id === problemId.problemId,
  );

  const cardStyles1 = {
    backgroundColor: '#4CD964',
  };
  const cardStyles2 = {
    backgroundColor: '#FFCC00',
  };
  const cardStyles3 = {
    backgroundColor: '#FF3B30',
  };
  const cardStyles4 = {
    backgroundColor: '#34AADC',
  };
  const cardStyles5 = {
    backgroundColor: '#FF9500',
  };

  return (
    <div className="card-stack">
      <a className="buttons prev" href="#">
        &lt;
      </a>
      <ul className="card-list">
        <li className="card" style={cardStyles1}></li>
        <li className="card" style={cardStyles2}></li>
        <li className="card" style={cardStyles3}></li>
        <li className="card" style={cardStyles4}></li>
        <li className="card" style={cardStyles5}></li>
      </ul>
      <a className="buttons next" href="#">
        &gt;
      </a>
    </div>
  );
};

export default ProblemSolutions;
