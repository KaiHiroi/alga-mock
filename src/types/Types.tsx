export type ButtonWithIcon = {
  button: string;
  icon: string;
  text: string;
};
export type RoundedButtonProps = {
  _text?: string;
  _linkTo?: string;
  _isActive?: boolean;
  _Icon?: React.ReactElement;
};

export type Problems = {
  id: number;
  text: string;
  solutions: {
    id: number;
    text: string;
    countDislike: number;
    countLike: number;
  }[];
};
