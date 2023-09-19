/**
 *
 * @param {string} site
 * @return {Promise<{status: number}>}
 */
export const getResponseCode = async (site) => {
  console.log('Tool::response');
  const response = await fetch(site);
  console.log('Tool::response', response.status);
  return { status: response.status };
};
