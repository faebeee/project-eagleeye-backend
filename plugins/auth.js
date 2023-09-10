import fp from 'fastify-plugin';
import bearerAuthPlugin from '@fastify/bearer-auth';

export default fp(async function (fastify, opts) {
  fastify.register(bearerAuthPlugin, {
    keys: new Set([process.env.AUTH_SECRET])
  })
})
