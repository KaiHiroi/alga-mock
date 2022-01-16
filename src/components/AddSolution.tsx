import { VFC } from 'react';
import styled from 'styled-components';

import { CircleButton } from './buttons';
import { HiOutlineDocumentAdd } from 'react-icons/hi';

const AddSolution: VFC = () => {
  return (
    <SolutionWrapper>
      <Message>
        最初の
        <br />
        ソリューションを
        <br />
        追加する
      </Message>
      <CircleButton _icon={<HiOutlineDocumentAdd />} _scale={1.2} />
    </SolutionWrapper>
  );
};

const SolutionWrapper = styled.div`
  margin: auto;
`;
const Message = styled.h2`
  font-size: 2.5rem;
  color: #555;
`;

export default AddSolution;
