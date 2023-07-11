/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);

/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== `production`;

const withPWA = require(`@ducanh2912/next-pwa`).default({
  dest: `public`,
  register: true,
  skipWaiting: true,
  disable: isDev,
});

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, `src/styles`)],
    prependData: `
    @import "color-themes";
    @import "mixins";
    @import "breakpoints";
    `,
  },
};

module.exports = withPWA(nextConfig);
