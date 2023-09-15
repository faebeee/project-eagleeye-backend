import { getLoadStats } from '../../lib/load/loadtest.js';

export default async function(fastify, opts) {
  fastify.get('/', async function(request, reply) {
    return getLoadStats(request.query.site);
  });
};
