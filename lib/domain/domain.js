import dodig from 'domain-digger';

export const getDomainInfo = async (site) => {
  const url = new URL(site);

// WHOIS
  const whois = await dodig.whois(url.host);
  const trace = await dodig.traceroute(url.host);
  const lookup = await dodig.lookup(url.host);
  return {
    whois,
    trace,
    lookup
  }
};
