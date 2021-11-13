/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

const { withKeystone } = require("@keystone-next/keystone/next");
module.exports = withKeystone({
 reactStrictMode: true,
});