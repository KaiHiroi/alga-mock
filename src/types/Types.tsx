export type ButtonWithIcon = {
  button: string;
  icon: string;
  text: string;
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
