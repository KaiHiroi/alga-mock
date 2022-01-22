import { VFC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { RoundedButton } from './buttons';

import { BsClipboard } from 'react-icons/bs';
import { VscDiff } from 'react-icons/vsc';

const AppFooter: VFC = () => {
  const location = useLocation();
  const matchPath = (path: string) => {
    return location.pathname === path;
  };
  const startWithPath = (path: string) => {
    return location.pathname.startsWith(path);
  };
  const proposalId = useParams().proposalId ?? '';

  return (
    <Footer>
      <RoundedButton
        _text="modreq"
        _linkTo={`/modreq/${proposalId}`}
        _isActive={startWithPath('/modreq')}
        _icon={<VscDiff />}
      />
      <Divider position={50} />
      <RoundedButton
        _text="board"
        _linkTo={`/board/${proposalId}`}
        _isActive={startWithPath('/board')}
        _icon={<BsClipboard />}
      />
    </Footer>
  );
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

export default AppFooter;
