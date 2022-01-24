import { VFC } from 'react';
import styled from 'styled-components';
import { ProgressBarProps } from '../../types/ComponentTypes';

const ProgressBar: VFC<ProgressBarProps> = (props) => {
  return (
    <Wrapper margin={props.margin ?? 0}>
      <Bar completed={props.completed} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ margin: number }>`
  height: 4px;
  background-color: #d3d3d3;
  border-radius: 4px;
  margin: ${(props) => props.margin}rem;
`;

const Bar = styled.div<{ completed: number }>`
  height: 100%;
  width: ${(props) => props.completed}%;
  background-color: #aaa;
  border-radius: inherit;
  transition: width 1s ease-in-out;
`;

export default ProgressBar;
