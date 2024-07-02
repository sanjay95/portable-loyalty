const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/registration-callback",
        destination: "/registration",
      },
      {
        source: "/liveness-callback",
        destination: "/sign-in",
      },
      {
        source: "/carrental-callback",
        destination: "/carrental",
      },
    ];
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "public/styles")],
  },
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
};

module.exports = nextConfig;
