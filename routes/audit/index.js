import { audit } from '../../lib/audit/audit.js';

/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param opts
 * @return {Promise<void>}
 */
export default async function(fastify, opts) {
  fastify.get('/', async function(request, reply) {
    return audit(request.query.site);
  });
};
