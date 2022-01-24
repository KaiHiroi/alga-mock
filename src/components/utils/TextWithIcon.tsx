import React, { VFC } from 'react';

export const TextWithIcon: VFC<{
  icon: React.ReactElement;
  children: string;
}> = ({ icon, children }) => {
  return (
    <>
      {icon}
      {children}
    </>
  );
};
