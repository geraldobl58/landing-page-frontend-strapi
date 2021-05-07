import React from 'react';
import PropTypes from 'prop-types';

import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

import * as S from './styles';

export const Base = ({ links, logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <S.Container>
        {children}
        <Footer html={footerHtml} />
      </S.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: PropTypes.node.isRequired,
  ...Menu.propTypes,
  footerHtml: PropTypes.string.isRequired,
};
