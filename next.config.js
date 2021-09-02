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
              styleSrc: [
                "'self'",
                ...(process.env.NODE_ENV === "development"
                  ? ["'unsafe-inline'"]
                  : []),
              ],
              scriptSrc: [
                "'self'",
                "*.googletagmanager.com",
                ...(process.env.NODE_ENV === "development"
                  ? ["'unsafe-inline'", "'unsafe-eval'"]
                  : []),
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
