const withPWA = require("next-pwa");
const { withPlaiceholder } = require("@plaiceholder/next");
const { createSecureHeaders } = require("next-secure-headers");

const config = {
  future: {
    strictPostcssConfiguration: true,
  },
  pwa: {
    dest: "public",
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: [
                "'self'",
                "alexnault.dev",
                "excalidraw.com",
                "*.googletagmanager.com",
                "*.google-analytics.com",
                "*.vercel-insights.com",
              ],
              styleSrc: ["'self'", "'unsafe-inline'"],
              scriptSrc: [
                "'self'",
                "'unsafe-inline'",
                "*.googletagmanager.com",
              ],
              imgSrc: ["'self'", "data:"],
              baseUri: "self",
              formAction: "self",
              frameAncestors: true,
            },
          },
        }),
      },
    ];
  },
};

module.exports = withPWA(withPlaiceholder(config));
