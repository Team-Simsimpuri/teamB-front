/** @type {import('next').NextConfig} */

// const withPlugins = require("next-compose-plugins");
// const withPWA = require("next-pwa");

// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

// const prod = process.env.NODE_ENV === "production";

// const runtimeCaching = require("next-pwa/cache");
// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   runtimeCaching,
//   disable: prod ? false : true,
// });

const prod = process.env.NODE_ENV === "production";

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: prod ? false : true,
});

const nextConfig = withPWA({
  // next config
});
module.exports = nextConfig;
