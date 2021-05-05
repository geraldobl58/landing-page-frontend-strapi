import React from 'react';
import { Menu } from '.';

import linksMocks from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMocks,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
