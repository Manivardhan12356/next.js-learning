// app/blog/[...slug]/page.tsx

import React from 'react';

type Props = {
  params: {
    slug?: string[]; // slug can be undefined or an array of strings
  };
};

const CatchAllSegments = ({ params }: Props) => {
  const { slug } = params;

  if (!slug) {
    return <div>No slug provided</div>;
  }

  if (slug.length === 1) {
    return <h1>{slug[0]}</h1>;
  }

  if (slug.length === 2) {
    return <h1>{`${slug[0]} and ${slug[1]}`}</h1>;
  }

  return <div>CatchAllSegments: {slug.join(' / ')}</div>;
};

export default CatchAllSegments;

