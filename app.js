'use strict';

import path from 'path';
import AutoLoad from '@fastify/autoload';
import * as url from 'url';

// Pass --options via CLI arguments in command to enable these options.
export const options = {
  port:4000
};

export default async function(fastify, opts) {
  // Place here your custom code!

  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  });
}
