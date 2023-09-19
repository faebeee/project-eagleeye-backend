import whoiser from 'whoiser';

export const getDomainInfo = async (site) => {
  console.log('Tool::domain');
  const url = new URL(site);

// WHOIS
  const whois = await whoiser(url.host);
  console.log('Tool::domain', whois);
  return {
    whois
  };
};
