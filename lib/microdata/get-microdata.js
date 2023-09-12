import { parseURL } from 'microdata-parser-ts'


export const getMicrodata = async (site) => {
  const data = await parseURL(site, {verbose:false});
  return data;
};
