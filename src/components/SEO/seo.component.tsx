import React from 'react';
import Head from 'next/head';

interface ITypes {
  title: string;
  description: string;
  image: string;
}

const SEO = (props: ITypes) => {
  const { title, description, image } = props;
  console.log(props);
  return (
    <Head>
      <title>Rosenthal Music | {title}</title>
      <meta name="description" content={description} />
      <meta name="name" content="Sander Rosenthal" />
      <meta name="image" content={image} />
      <meta name="robots" content="index, nofollow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default SEO;