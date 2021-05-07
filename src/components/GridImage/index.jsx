import React from 'react';
import PropTypes from 'prop-types';

import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import { Heading } from '../Header';

import * as S from './styles';

export const GridImage = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <S.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <S.Grid>
          {grid.map((el) => (
            <S.GridElement key={el.srcImg}>
              <S.Image src={el.srcImg} alt={el.altText} />
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      altText: PropTypes.string.isRequired,
      srcImg: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
