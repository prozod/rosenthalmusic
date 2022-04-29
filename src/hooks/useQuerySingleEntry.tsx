import { IWorkFields } from "@utils/contentful_types";
import { Entry, EntryCollection, EntryFields } from "contentful";
import { useState, useEffect } from "react";
import { client } from "src/utils/client";

interface WorkEntries {}

export const useQuerySingleEntry = (entry_id: string) => {
  const [data, setData] = useState<Entry<IWorkFields>>();

  useEffect(() => {
    client
      .getEntry<IWorkFields>(entry_id)
      .then((responseData) => setData(responseData))
      .catch((err) => console.error(err));
  }, [entry_id]);
  return { data, setData };
};
