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
          referrerPolicy: "origin-when-cross-origin",
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
                ...(process.env.NODE_ENV === "development"
                  ? ["'unsafe-eval'"] // For hot reload
                  : []),
              ],
              imgSrc: ["'self'", "data:"],
              baseUri: ["'self'"],
              formAction: ["'self'"],
              objectSrc: ["'none'"],
              frameAncestors: true,
            },
          },
        }),
      },
    ];
  },
};

module.exports = withPWA(withPlaiceholder(config));
