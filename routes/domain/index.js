import { getDomainInfo } from '../../lib/domain/domain.js';

export default async function(fastify, opts) {
  fastify.get('/', async function(request, reply) {
    return getDomainInfo(request.query.site);
  });
};
