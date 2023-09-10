import { getTools } from '../../lib/tools/tools.js';

/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param opts
 * @return {Promise<string[]>}
 */
export default async function(fastify, opts) {
  fastify.get('/', async (req, res) => {
    return getTools(req.query.site);
  });
}
