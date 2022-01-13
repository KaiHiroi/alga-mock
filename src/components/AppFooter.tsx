import { VFC } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { RoundedButton } from './buttons';

import { BsClipboard } from 'react-icons/bs';
import { VscDiff } from 'react-icons/vsc';

const AppFooter: VFC = () => {
  const location = useLocation();
  const matchPath = (path: string) => {
    return location.pathname === path;
  };

  const Footer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    background-color: white;
  `;
  const Divider = styled.div`
    border: 2px solid #e2e8f0;
    margin: 1rem 0;
  `;

  return (
    <Footer>
      <RoundedButton
        _text="modreq"
        _linkTo="/modreq"
        _isActive={matchPath('/modreq')}
        _Icon={<VscDiff />}
      />
      <Divider />
      <RoundedButton
        _text="board"
        _linkTo="/board"
        _isActive={matchPath('/board')}
        _Icon={<BsClipboard />}
      />
    </Footer>
  );
};

export default AppFooter;
