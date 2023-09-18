import pkg from '../../package.json' assert { type: 'json' };

export default async function(fastify, opts) {
  fastify.get('/', async function(request, reply) {
    return {
      status: 'ok',
      version: pkg.version
    };
  });
};
