import weblyse from 'node-weblyse';


export const getTools = async (site) => {
  return weblyse({
    urls: [
      // add as much URLs as you want
      // the report will contain all of them
      site
    ],
    // if you don't need a file just omit the reportFilePath key
    // you con configure the single providers
    // enable/disable them via a simple boolean
    // or use an object for configuration values
    providers: {
      ssllabs: true,
      securityheaders: true,
      webhint: true,
      screenshots: true,
      lighthouse: true,
      axe: true
    }
  });
};
