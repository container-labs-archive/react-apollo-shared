
module.exports = function (api) {
  const presets = [
    [
      '@babel/preset-env',
      {
        // "debug": true,
        "useBuiltIns": "usage",
        // "targets": {
        //   "ie": "11",
        //   "chrome": "latest"
        // }
        corejs: { version: 3, proposals: true }
      },
    ],
    '@babel/preset-flow',
    '@babel/preset-react',
  ];
  const plugins = [
    [
      '@babel/proposal-decorators',
      {
        // 'decoratorsBeforeExport': true,
        'legacy': true
      }
      // {
      //   'legacy': true,
      // },
    ],
    [
      '@babel/proposal-class-properties',
      {
        'loose': false,
      },
    ],
    '@babel/proposal-function-sent',
    '@babel/proposal-export-namespace-from',
    '@babel/proposal-numeric-separator',
    '@babel/proposal-throw-expressions',
    '@babel/syntax-dynamic-import',
    '@babel/syntax-import-meta',

    '@babel/proposal-json-strings',

    [
      '@babel/transform-destructuring',
      {
        'loose': true,
      },
    ],
    [
      '@babel/transform-spread',
      {
        'loose': true,
      },
    ],
    'react-html-attrs',
    '@babel/transform-flow-strip-types',
    'check-es2015-constants',
    '@babel/transform-arrow-functions',
    '@babel/transform-block-scoped-functions',
    '@babel/transform-block-scoping',
    '@babel/transform-computed-properties',
    '@babel/transform-duplicate-keys',
    '@babel/transform-for-of',
    '@babel/transform-function-name',
    '@babel/transform-literals',
    '@babel/transform-modules-commonjs',
    '@babel/transform-object-super',
    '@babel/transform-parameters',
    '@babel/transform-shorthand-properties',
    '@babel/transform-sticky-regex',
    '@babel/transform-template-literals',
    '@babel/transform-typeof-symbol',
    '@babel/transform-unicode-regex',
    '@babel/transform-object-assign',
    '@babel/transform-proto-to-assign',
    '@babel/transform-regenerator',
    ['@babel/transform-classes', {
      'loose': true,
    }],
  ];

  api.cache(false);

  return {
    presets,
    plugins,
  };
};
