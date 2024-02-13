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
            '@assets': './src/assets',
            '@config': './src/config',
            '@hooks': './src/hooks',
            '@libs': './src/libs',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
          },
        },
      ],
    ],
  };
};
