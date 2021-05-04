import React from 'react';
import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure accusantium laborum reprehenderit soluta tenetur aut facere dolorum dignissimos deserunt! Non dolorum temporibus nemo reprehenderit iure debitis consequatur et neque.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
