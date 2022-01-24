export type ButtonWithIcon = {
  button: string;
  icon: string;
  text: string;
};
export type RoundedButtonProps = {
  _text?: string;
  _linkTo?: string;
  _isActive?: boolean;
  _icon?: React.ReactElement;
  _iconColor?: string;
};
export type CircleButtonProps = {
  _iconColor?: string;
  _scale?: number;
  _linkTo?: any;
  onClick?: () => void;
  children?: React.ReactElement;
};

export type Problems = {
  id: number;
  text: string;
  solutions: {
    id: number;
    addingRules: string;
    subCommitteeAndBudget: string;
    countDislike: number;
    countLike: number;
  }[];
};

export type ProgressBarProps = {
  completed: number;
  margin?: number;
};
