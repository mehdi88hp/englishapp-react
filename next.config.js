/** @type {import('next').NextConfig} */
const publicRuntimeConfig = require('./publicRuntimeConfig');
const privateRuntimeConfig = require('./privateRuntimeConfig');

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig,
  privateRuntimeConfig,
}

module.exports = nextConfig
