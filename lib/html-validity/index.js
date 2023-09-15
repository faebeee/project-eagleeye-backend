import validator from 'html-validator';

export const getHtmlValidity = async (site) => {
  const options = {
    url: site, format: 'json'
  };

  try {
    const result = await validator(options);
    return result;
  } catch (error) {
    console.error(error);
  }
};
