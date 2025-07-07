import React from 'react';

type Props = {
  params: { slug: string | string[] };
};

const catchALLsegments = ({ params }: Props) => {
  if (params?.slug?.length === 1) {
    return <h1>{params.slug[0]}</h1>;
  }
  if (params?.slug?.length === 2) {
    return <h1>{`${params.slug[0]} and ${params.slug[1]}`}</h1>;
  }

  return <div>catchALLsegments</div>;
};

export default catchALLsegments;