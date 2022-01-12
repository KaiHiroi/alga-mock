import { VFC } from 'react';

type Props = {
  completed: number;
};

const ProgressBar: VFC<Props> = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 5,
    width: '100%',
    backgroundColor: '#d3d3d3',
    borderRadius: 5,
  };

  const barStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#aaa',
    borderRadius: 'inherit',
    transition: 'width 1s ease-in-out',
  };

  return (
    <div className="mx-3 my-2">
      <div style={containerStyles}>
        <div style={barStyles}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
