import { EntryCollection } from 'contentful';
import {
  CONTENT_TYPE,
  IAboutFields,
  IWorkFields,
  IHomepageFields,
} from '@utils/contentful_types';
import { useState, useEffect } from 'react';
import { client } from 'src/utils/client';

export type GetRequiredContentTypes<T> = T extends 'work'
  ? EntryCollection<IWorkFields>
  : T extends 'about'
  ? EntryCollection<IAboutFields>
  : T extends 'homepage'
  ? EntryCollection<IHomepageFields>
  : never;

export const useQueryDataCollection = <TypeArg>(contentType: CONTENT_TYPE) => {
  const [data, setData] = useState<GetRequiredContentTypes<TypeArg>>();

  useEffect(() => {
    client
      .getEntries<IWorkFields | IAboutFields | IHomepageFields>({
        content_type: contentType,
      })
      .then((responseData) =>
        setData(responseData as GetRequiredContentTypes<TypeArg>)
      )
      .catch((err) => console.log(err));
  }, [contentType]);
  return { data, setData };
};
