import ogs from 'open-graph-scraper'

/**
 * Scrap open graph data for a site
 * @param {string} url
 * @return {Promise<unknown>}
 */
export const getOpenGraphData = async (url) => {
  const options = {url}
  const result = await ogs(options)

  if(result.error) {
    throw result.error;
  }

  return result.result;

}
