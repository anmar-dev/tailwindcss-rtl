const plugin = require('tailwindcss/plugin');

const paddingUtilities = require('./paddingUtilities');
const marginUtilities = require('./marginUtilities');
const floatUtilities = require('./floatUtilities');
const insetUtilities = require('./insetUtilities');
const clearUtilities = require('./clearUtilities');
const borderRadiusUtilities = require('./borderRadiusUtilities');
const borderWidthUtilities = require('./borderWidthUtilities');
const textAlignUtilities = require('./textAlignUtilities');
const transformOriginUtilities = require('./transformOriginUtilities');

module.exports = plugin(function ({ addUtilities, e, theme, variants, target }) {
  addUtilities(paddingUtilities(theme, e, target), variants('padding'));
  addUtilities(marginUtilities(theme, e, target), variants('margin'));
  addUtilities(insetUtilities(theme, e), variants('inset'));
  addUtilities(borderRadiusUtilities(theme, e), variants('borderRadius'));
  addUtilities(clearUtilities(), variants('clear'));
  addUtilities(floatUtilities(), variants('float'));
  addUtilities(borderWidthUtilities(theme, e), variants('borderWidth'));
  addUtilities(textAlignUtilities(), variants('textAlign'));
  addUtilities(transformOriginUtilities(), variants('transformOrigin'));
});
