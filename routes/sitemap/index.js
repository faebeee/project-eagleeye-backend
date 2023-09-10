import { getListOfSites } from '../../lib/sitemap-scrap.js';

/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param opts
 * @return {Promise<string[]>}
 */
export default async function(fastify, opts) {
  fastify.get('/', async (req, res) => {
    return getListOfSites(req.query.site);
  });
}
