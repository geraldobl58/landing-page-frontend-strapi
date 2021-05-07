import React from 'react';
import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '200vh' }}>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        consectetur adipisicing elit. Maxime numquam earum voluptatem deserunt,
        illo, neque pariatur ducimus hic ad in distinctio qui at veritatis
        voluptatum labore dolores, voluptas excepturi laudantium.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        consectetur adipisicing elit. Maxime numquam earum voluptatem deserunt,
        illo, neque pariatur ducimus hic ad in distinctio qui at veritatis
        voluptatum labore dolores, voluptas excepturi laudantium.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        consectetur adipisicing elit. Maxime numquam earum voluptatem deserunt,
        illo, neque pariatur ducimus hic ad in distinctio qui at veritatis
        voluptatum labore dolores, voluptas excepturi laudantium.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        consectetur adipisicing elit. Maxime numquam earum voluptatem deserunt,
        illo, neque pariatur ducimus hic ad in distinctio qui at veritatis
        voluptatum labore dolores, voluptas excepturi laudantium.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        consectetur adipisicing elit. Maxime numquam earum voluptatem deserunt,
        illo, neque pariatur ducimus hic ad in distinctio qui at veritatis
        voluptatum labore dolores, voluptas excepturi laudantium.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        consectetur adipisicing elit. Maxime numquam earum voluptatem deserunt,
        illo, neque pariatur ducimus hic ad in distinctio qui at veritatis
        voluptatum labore dolores, voluptas excepturi laudantium.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        consectetur adipisicing elit. Maxime numquam earum voluptatem deserunt,
        illo, neque pariatur ducimus hic ad in distinctio qui at veritatis
        voluptatum labore dolores, voluptas excepturi laudantium.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        consectetur adipisicing elit. Maxime numquam earum voluptatem deserunt,
        illo, neque pariatur ducimus hic ad in distinctio qui at veritatis
        voluptatum labore dolores, voluptas excepturi laudantium.
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        consectetur adipisicing elit. Maxime numquam earum voluptatem deserunt,
        illo, neque pariatur ducimus hic ad in distinctio qui at veritatis
        voluptatum labore dolores, voluptas excepturi laudantium.
      </p>
      <GoTop {...args} />
    </div>
  );
};
