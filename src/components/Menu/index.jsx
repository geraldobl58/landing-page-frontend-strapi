import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { SectionContainer } from '../SectionContainer';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import * as S from './styles';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <S.Container>
      <S.Button visible={visible} onClick={() => setVisible(true)}>
        {visible ? <CloseIcon /> : <MenuIcon />}
      </S.Button>
      <S.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <S.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </S.MenuContainer>
        </SectionContainer>
      </S.Container>
    </S.Container>
  );
};

Menu.propTypes = {
  ...NavLinks.PropTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired,
};
