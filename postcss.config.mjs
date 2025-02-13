export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },
  },
}
