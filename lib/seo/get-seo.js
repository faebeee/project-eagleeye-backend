import scraper from 'seo-scraper';

export const getSeo = async (site) => {
  return await scraper.scrape({ url: site });
};
