import { getSeo } from '../../lib/seo/get-seo.js';

export default async function(fastify, opts) {
  fastify.get('/', async (req, res) => {
    return getSeo(req.query.site);
  });
}
