import { getResponseCode } from '../../lib/response/response.js';

export default async function(fastify, opts) {
  fastify.get('/', async (req, res) => {
    return getResponseCode(req.query.site);
  });
}
