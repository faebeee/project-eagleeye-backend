import { getMicrodata } from '../../lib/microdata/get-microdata.js';

export default async function(fastify, opts) {
  fastify.get('/', async function(request, reply) {
    return getMicrodata(request.query.site);
  });
};
