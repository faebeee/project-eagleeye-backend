/**
 *
 * @param {string} site
 * @return {Promise<{status: number}>}
 */
export const getResponseCode = async (site) => {
  const response = await fetch(site);
  return { status: response.status };
};
