const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#f9a857',
      '@success-color': '#f9a857',
      '@text-selection-bg': '#f9a857',
      '@link-color': '#f9a857',
    },
  })
);
