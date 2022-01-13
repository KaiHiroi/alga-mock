import { VFC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ButtonWithIcon, RoundedButtonProps } from '../../types/Types';

import { ImCross, ImHeart } from 'react-icons/im';
import { VscDiff } from 'react-icons/vsc';
import { BsClipboard } from 'react-icons/bs';
import { PollingWatchKind, reduceEachTrailingCommentRange } from 'typescript';

const CircleButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  line-height: 4rem;
  border: 0;
  border-radius: 100%;
  filter: drop-shadow(0.4rem 0.8rem 1.8rem rgb(0 0 0 / 0.5));
  font-size: 1.5rem;
  background-color: white;
  &:hover {
    background-color: #f8fafc;
  }
`;

const RedImCross = styled(ImCross)`
  color: #e55;
`;

const GreenImHeart = styled(ImHeart)`
  color: #6edc9a;
`;

export const RedCrossCircleButton: VFC = () => {
  return (
    <CircleButton>
      <RedImCross />
    </CircleButton>
  );
};

export const GreenHeartCircleButton: VFC = () => {
  return (
    <CircleButton>
      <GreenImHeart />
    </CircleButton>
  );
};

export const ButtonModReq: VFC<ButtonWithIcon> = (props) => {
  const styles = props;
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/modreq')}
      {...{ className: styles.button }}
    >
      <div {...{ className: styles.icon }}>
        <VscDiff />
      </div>
      <div {...{ className: styles.text }}>modreq</div>
    </button>
  );
};

export const RoundedButton: VFC<RoundedButtonProps> = ({
  _text,
  _linkTo,
  _isActive,
  _Icon,
}) => {
  const [text, linkTo, isActive, Icon] = [
    _text ?? '',
    _linkTo ?? '/',
    _isActive ?? false,
    _Icon ?? '',
  ];

  const navigate = useNavigate();

  const ButtonWrapper = styled.button`
    display: flex;
    font-size: 1.25rem;
    line-height: 1.75rem;
    border: 0;
    border-radius: 9999px;
    background-color: ${isActive ? '#cffaf7' : 'white'};
    &:hover {
      background-color: ${isActive ? '#99f6e4' : '#f1f5f9'};
    }
    color: ${isActive ? '#61C2B7' : '#898989'};
    margin: 0.75rem;
    padding: 0.5rem 0.75rem;
  `;

  const GrayIcon = styled.div`
    color: #64748b;
    font-size: 1.875rem;
    margin-right: 0.25rem;
  `;

  const TextWrapper = styled.div`
    font-weight: ${isActive ? 'bold' : 'normal'};
  `;

  return (
    <ButtonWrapper onClick={() => navigate(linkTo)}>
      <GrayIcon>{Icon}</GrayIcon>
      <TextWrapper>{text}</TextWrapper>
    </ButtonWrapper>
  );
};
