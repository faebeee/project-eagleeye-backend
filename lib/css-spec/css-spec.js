import cssstats from 'cssstats';
import getCss from 'get-css';

export const cssSpec = async (site) => {
  console.log(site);
  const css = await getCss(site);
  const singleCssContent = css.links.map((link) => link.css).join(' ');
  const stats = cssstats(singleCssContent);
  return stats;

};
