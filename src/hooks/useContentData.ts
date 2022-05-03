import { EntryCollection } from 'contentful';
import { IAboutFields, IWorkFields } from '@utils/contentful_types';
import { useState, useEffect } from 'react';
import { client } from 'src/utils/client';

export const useQueryDataCollection = (contentType: string) => {
  const [data, setData] = useState<EntryCollection<any>>();

  useEffect(() => {
    client
      .getEntries<IWorkFields | IAboutFields>({
        content_type: contentType,
      })
      .then((responseData) => setData(responseData))
      .catch((err) => console.log(err));
  }, []);
  return { data, setData };
};
