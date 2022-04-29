import * as contentful from 'contentful';
console.log(process.env.NEXT_PUBLIC_SPACE_ID);

export const client = contentful.createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENT_DELIVERY_ACCESS_TOKEN as string,
  space: process.env.NEXT_PUBLIC_SPACE_ID as string,
});
