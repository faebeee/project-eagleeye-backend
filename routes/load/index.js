import { getLoadStats } from '../../lib/load/loadtest.js';
import NodeCache from 'node-cache';

export default async function(fastify, opts) {
  const cache = new NodeCache();

  fastify.get('/', async function(req, reply) {
    const url = req.query.site;
    if (cache.has(url)) {
      console.log('route /load cache hit');
      return cache.get(url);
    }
    cache.set(url, { status: 'loading', result: null });
    getLoadStats(url)
      .then((result) => {
        console.log('route /load cache populated');
        cache.set(url, { status: 'loaded', result });
      })
      .catch((e) => {
        console.log('route /load failed', e.message);
        cache.del(url);
      });

    return cache.get(url);
  });
};
