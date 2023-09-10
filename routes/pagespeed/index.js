import { getPageSpeed } from '../../lib/pagespeed/pagespeed.js';


/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param opts
 * @return {Promise<string[]>}
 */
export default async function(fastify, opts) {
  fastify.get('/', async (req, res) => {
    return getPageSpeed(req.query.site);
  });
}
