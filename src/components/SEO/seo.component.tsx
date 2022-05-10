import React from 'react';
import Head from 'next/head';

interface ITypes {
  title: string;
  description: string;
  image: string;
}

const SEO = (props: ITypes) => {
  const { title, description, image } = props;

  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="name" content="Sander Rosenthal" />
      <meta name="image" content={image} />
      <meta name="robots" content="index, nofollow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
