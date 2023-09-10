import { getOpenGraphData } from '../../lib/og-scrap/og-scrap.js';

/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param opts
 * @return {Promise<*>}
 */
export default async function(fastify, opts) {
  fastify.get('/', async (req, res) => {
    return getOpenGraphData(req.query.site);
  });
}
