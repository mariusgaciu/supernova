module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.tsx', '.jsx', '.js', '.ts'],
          alias: {
            '@config': './src/config',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
          },
        },
      ],
    ],
  };
};
