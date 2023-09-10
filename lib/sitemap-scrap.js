import SitemapXMLParser from 'sitemap-xml-parser'

/**
 * get list of site for a sitemap
 * @param {string} url
 * @return {Promise<string[]>}
 */
export const getListOfSites = async (url) => {
  const options = {
    delay: 3000,
    limit: 5
  }

  try {
    const sitemapXMLParser = new SitemapXMLParser(url, options)

    const result = (await sitemapXMLParser.fetch())
    return result.map((r) => r.loc[0])
  }catch(e) {
    return []
  }
}
