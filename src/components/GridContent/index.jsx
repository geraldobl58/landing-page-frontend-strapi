import React from 'react';
import PropTypes from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Header';
import { TextComponent } from '../TextComponent';

import * as S from './styles';

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <S.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <S.Html>
          <TextComponent>{html}</TextComponent>
        </S.Html>
      </S.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  background: PropTypes.bool,
};
