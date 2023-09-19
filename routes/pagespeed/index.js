import { getPageSpeed } from '../../lib/pagespeed/pagespeed.js';
import NodeCache from 'node-cache';


/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param opts
 * @return {Promise<string[]>}
 */
export default async function(fastify, opts) {
  const cache = new NodeCache();
  fastify.get('/', async (req, res) => {
    const url = req.query.site;
    if (cache.has(url)) {
      return cache.get(url);
    }

    cache.set(url, { status: 'loading', result: null });
    getPageSpeed(url)
      .then((result) => {
        cache.set(url, { status: 'loaded', result });
      });

    return cache.get(url);
  });
}
