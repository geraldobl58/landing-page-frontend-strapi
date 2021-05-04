import React from 'react';
import PropTypes from 'prop-types';

import { MenuLink } from '../MenuLink';

import * as S from './styles';

export const NavLinks = ({ links = [] }) => {
  return (
    <S.Container>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </S.Container>
  );
};

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.node.isRequired,
      link: PropTypes.string.isRequired,
      newTab: PropTypes.bool,
    }),
  ),
};
