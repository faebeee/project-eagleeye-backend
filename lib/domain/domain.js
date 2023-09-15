import whoiser from 'whoiser';

export const getDomainInfo = async (site) => {
  const url = new URL(site);

// WHOIS
  const whois = await whoiser(url.host);
  return {
    whois
  };
};
