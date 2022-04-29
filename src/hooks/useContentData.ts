import { EntryCollection } from 'contentful';
import { IWork, IWorkFields } from '@utils/contentful_types';
import { useState, useEffect } from "react";
import { client } from "src/utils/client";



export const useQueryDataCollection = () => { 
    const [data, setData] = useState<EntryCollection<IWorkFields>>()
    console.log(typeof data);
    
  useEffect(() => {
    client
      .getEntries<IWorkFields>()
      .then((responseData) => setData(responseData)).catch((err) => console.log(err));
  }, []);
    return {data, setData}
 };
