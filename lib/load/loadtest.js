import { loadTest } from 'loadtest';

export const getLoadStats = async (site) => {
  const result = await loadTest({
    url: site,
    maxRequests: 500,
    requestsPerSecond: 100,
  });
  return result;
};
