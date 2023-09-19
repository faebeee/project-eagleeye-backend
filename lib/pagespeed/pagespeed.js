import psi from 'psi';

/**
 * @param {string} site
 * @return {Promise<Record<string,unknown>>}
 */
export const getPageSpeed = async (site) => {
  console.log('Tool::pagespeed');
  const { data } = await psi(site, { strategy: 'desktop' });
  console.log('Tool::og done');
  return data.lighthouseResult;
};
