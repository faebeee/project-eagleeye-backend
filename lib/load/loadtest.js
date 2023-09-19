import { loadTest } from 'loadtest';

export const getLoadStats = async (site) => {
  console.log('Tool::load');
  const result = await loadTest({
    url: site,
    maxRequests: 500,
    requestsPerSecond: 100
  });
  console.log('Tool::load', result);
  return result;
};
