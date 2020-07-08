const _ = require('lodash');
const {
  default: prefixNegativeModifiers,
} = require('tailwindcss/lib/util/prefixNegativeModifiers');

const generators = (e,target) => [
  target('marginUtilites') === 'ie11' ?
  (size, modifier) => ({
    [`[dir="rtl"] .${e(prefixNegativeModifiers('ms', modifier))}`]: {
      'margin-right': `${size}`,
    },
    [`[dir="rtl"] .${e(prefixNegativeModifiers('me', modifier))}`]: {
      'margin-left': `${size}`,
    },
    [`[dir="ltr"] .${e(prefixNegativeModifiers('ms', modifier))}`]: {
      'margin-left': `${size}`,
    },
    [`[dir="ltr"] .${e(prefixNegativeModifiers('me', modifier))}`]: {
      'margin-right': `${size}`,
    },
  }) :
  (size, modifier) => ({
    [`.${e(prefixNegativeModifiers('ms', modifier))}`]: {
      'margin-inline-start': `${size}`,
    },
    [`.${e(prefixNegativeModifiers('me', modifier))}`]: {
      'margin-inline-end': `${size}`,
    },
  }),
];

module.exports = (theme, e, target) => {
  return _.flatMap(generators(e, target), (generator) => {
    return _.flatMap(theme('margin'), generator);
  });
};
