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
    position: relative;
  `;
  const Divider = styled.div<{ position: number }>`
    border: 2px solid #e2e8f0;
    height: 60%;
    margin: 1rem 0;
    position: absolute;
    left: ${(p) => p.position}%;
  `;

  return (
    <Footer>
      <RoundedButton
        _text="modreq"
        _linkTo="/modreq"
        _isActive={matchPath('/modreq')}
        _icon={<VscDiff />}
      />
      <Divider position={50} />
      <RoundedButton
        _text="board"
        _linkTo="/board"
        _isActive={matchPath('/board')}
        _icon={<BsClipboard />}
      />
    </Footer>
  );
};

export default AppFooter;
