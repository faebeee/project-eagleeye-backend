import Wappalyzer from 'uproc-wappalyzer';


export const getTools = async (site) => {
  const wappalyzer = new Wappalyzer()
  try {
    await wappalyzer.init()

    const results = await Promise.all(
      [site].map(async (url) => ({
        url,
        results: await wappalyzer.open(url).analyze()
      }))
    )

    return results
  } catch (error) {
    console.error(error)
  }

  await wappalyzer.destroy()
};
