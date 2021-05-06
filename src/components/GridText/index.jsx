import React from 'react';
import PropTypes from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import { Heading } from '../Header';

import * as S from './styles';

export const GridText = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <S.Container>
        <Heading size="huge" uppercase colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <S.Grid>
          {grid.map((el) => (
            <S.GridElement key={el.title}>
              <Heading size="small" colorDark={!background}>
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  background: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
