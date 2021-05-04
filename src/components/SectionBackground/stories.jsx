import React from 'react';
import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          voluptatem soluta eveniet ducimus, hic voluptate amet dolores tenetur,
          quisquam assumenda iste, fugiat ut consectetur laudantium fugit
          officiis nisi eius deleniti!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
