import { VFC } from 'react';
import styled from 'styled-components';

import { CircleButton } from '../buttons';
import { HiOutlineDocumentAdd } from 'react-icons/hi';

const AddSolution: VFC = () => {
  return (
    <Wrapper>
      <h2>
        最初の
        <br />
        ソリューションを
        <br />
        追加する
      </h2>
      <CircleButton _icon={<HiOutlineDocumentAdd />} _scale={1.2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  h2 {
    font-size: 2.5rem;
    color: #555;
  }
`;

export default AddSolution;
