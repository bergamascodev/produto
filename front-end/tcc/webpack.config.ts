const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            syntax: 'postcss-scss',
            plugins: () => [
              autoprefixer(),
              tailwindcss('./tailwind.config.js'),
            ],
          },
        },
      },
    ],
  },
};
