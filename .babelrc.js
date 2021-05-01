const presets = [
  ['@babel/typescript', { jsxPragma: 'h' }],
  '@babel/preset-env'
];

const plugins = [
  ['@babel/plugin-transform-react-jsx', {
    runtime: 'automatic',
    importSource: 'react',
  }]
];


module.exports = { presets, plugins };
