module.exports = function (api) {
  api.cache(true)

  const plugins = ['emotion', 'inline-react-svg']
  const presets = [
    [
      'next/babel',
      {
        'preset-env': {
          targets: '>0.25%, not ie 10',
          corejs: '3',
          useBuiltIns: 'entry',
        },
      },
    ],
  ]

  return { plugins, presets }
}
