import React from 'react';

import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

import * as S from './styles';

export const GoTop = () => {
  return (
    <S.Container href="#" aria-label="Go to Top" title="Go to Top">
      <KeyboardArrowUp />
    </S.Container>
  );
};
