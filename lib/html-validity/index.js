import validator from 'html-validator';

export const getHtmlValidity = async (site) => {
  console.log('Tool::html-validity');

  const options = {
    url: site, format: 'json'
  };

  try {
    const result = await validator(options);
    console.log('Tool::html-validity done');
    return result;
  } catch (error) {
    console.error(error);
  }
};
