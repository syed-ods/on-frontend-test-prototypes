const toolkit = require('@ongov/ontario-frontend');

function configFunc(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'src/assets': 'en/assets',
  });

  eleventyConfig.addLayoutAlias('ontariocaLayout', 'vendor/ontario-ca/layout.njk');


}

module.exports = (eleventyConfig) => {
  const unboundCoreConfigFunc = toolkit.ontariocaEleventyConfigFunc;
  const boundCoreConfigFunc = unboundCoreConfigFunc.bind(this);
  boundCoreConfigFunc(eleventyConfig, __dirname);

  const coreConfig = toolkit.ontariocaEleventyConfigObj;

  configFunc(eleventyConfig);

  return {
    ...coreConfig,
  };
  
};
