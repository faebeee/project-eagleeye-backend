import { getHtmlValidity } from '../../lib/html-validity/index.js';

export default async function(fastify, opts) {
  fastify.get('/', async function(request, reply) {
    return getHtmlValidity(request.query.site);
  });
};
