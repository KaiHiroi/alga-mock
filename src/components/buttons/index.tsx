import { VFC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { RoundedButtonProps, CircleButtonProps } from '../../types/Types';

export const CircleButton: VFC<CircleButtonProps> = (props) => {
  const [icon, iconColor, scale] = [
    props._icon,
    props._iconColor ?? '#64748b',
    props._scale ?? 1,
  ];

  return (
    <CircleButtonBase _iconColor={iconColor} _scale={scale}>
      {icon}
    </CircleButtonBase>
  );
};
const CircleButtonBase = styled.button<Partial<CircleButtonProps>>`
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
  transform: scale(${(p) => p._scale});
  color: ${(p) => p._iconColor};
`;

export const RoundedButton: VFC<RoundedButtonProps> = (props) => {
  const [text, linkTo, isActive, icon, iconColor] = [
    props._text ?? '',
    props._linkTo ?? '/',
    props._isActive ?? false,
    props._icon ?? '',
    props._iconColor ?? '#64748b',
  ];

  const navigate = useNavigate();

  return (
    <RoundedButtonBase onClick={() => navigate(linkTo)} _isActive={isActive}>
      <RoundedButtonIcon _iconColor={iconColor}>{icon}</RoundedButtonIcon>
      <RoundedButtonText _isActive={isActive}>{text}</RoundedButtonText>
    </RoundedButtonBase>
  );
};
const RoundedButtonBase = styled.button<Partial<RoundedButtonProps>>`
  display: flex;
  font-size: 1.25rem;
  line-height: 1.75rem;
  border: 0;
  border-radius: 9999px;
  background-color: ${(p) => (p._isActive ? '#cffaf7' : 'white')};
  &:hover {
    background-color: ${(p) => (p._isActive ? '#99f6e4' : '#f1f5f9')};
  }
  color: ${(p) => (p._isActive ? '#61C2B7' : '#898989')};
  margin: 0.75rem;
  padding: 0.5rem 0.75rem;
`;
const RoundedButtonIcon = styled.div<Partial<RoundedButtonProps>>`
  color: ${(p) => p._iconColor};
  font-size: 1.875rem;
  margin-right: 0.25rem;
`;
const RoundedButtonText = styled.div<Partial<RoundedButtonProps>>`
  font-weight: ${(p) => (p._isActive ? 'bold' : 'normal')};
`;
