const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `
    @import "color-themes";
    @import "mixins";
    `,
  },
};

module.exports = nextConfig;
