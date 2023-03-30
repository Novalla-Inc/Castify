import cssnano from 'cssnano';

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: cssnano({
      preset: 'default',
    }),
  },
}
