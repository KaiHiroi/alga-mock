import { VFC } from 'react';
import styled from 'styled-components';
import { RoundedButton } from './buttons';

const Header: VFC = () => {
  return (
    <HeaderWrapper>
      <div>Alga LOGO</div>
      <Nav>
        <RoundedButton _text="Launch App" _linkTo="/modreq/1" />
      </Nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
`;
const Nav = styled.nav`
  display: flex;
`;

export default Header;
