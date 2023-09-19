import { parseURL } from 'microdata-parser-ts'


export const getMicrodata = async (site) => {
  console.log('Tool::microdata');
  const data = await parseURL(site, {verbose:false});
  console.log('Tool::microdata done');
  return data;
};
