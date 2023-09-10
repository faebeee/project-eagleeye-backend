import { cssSpec } from '../../lib/css-spec/css-spec.js';

/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param opts
 * @return {Promise<void>}
 */
export default async function(fastify, opts) {
  fastify.get('/', async function(request, reply) {
    return cssSpec(request.query.site);
  });
};
