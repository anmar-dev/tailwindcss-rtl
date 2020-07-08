const _ = require('lodash');

const generators = (e, target) => [
  target('paddingUtilities') === 'ie11' ?
  (size, modifier) => ({
    /*
    [`[dir="rtl"] .${e(`ps-${modifier}`)}`]: { 'padding-right': `${size}` },
    [`[dir="rtl"] .${e(`pe-${modifier}`)}`]: { 'padding-left': `${size}` },
    [`[dir="ltr"] .${e(`pe-${modifier}`)}`]: { 'padding-right': `${size}` },
    [`[dir="ltr"] .${e(`ps-${modifier}`)}`]: { 'padding-left': `${size}` },
    */
    [`.${e(`ps-${modifier}`)}`]: { 'padding-inline-start': `${size}` },
    [`.${e(`pe-${modifier}`)}`]: { 'padding-inline-end': `${size}` },
  }) :
  (size, modifier) => ({
    [`.${e(`ps-${modifier}`)}`]: { 'padding-inline-start': `${size}` },
    [`.${e(`pe-${modifier}`)}`]: { 'padding-inline-end': `${size}` },
  }),
];

module.exports = (theme, e, target) => {
  return _.flatMap(generators(e, target), (generator) => {
    return _.flatMap(theme('padding'), generator);
  });
};
