import psi from 'psi'

/**
 * @param {string} site
 * @return {Promise<Record<string,unknown>>}
 */
export const getPageSpeed = async (site) => {
  const {data} = await psi(site, {strategy:'desktop'})
  return data.lighthouseResult
}
