import React from 'react';
import PropTypes from 'prop-types';

import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

import * as S from './styles';

export const Footer = ({ html }) => {
  return (
    <S.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </S.Container>
  );
};

Footer.propTypes = {
  html: PropTypes.string.isRequired,
};
