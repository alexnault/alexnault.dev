const withPWA = require("next-pwa");
const { createSecureHeaders } = require("next-secure-headers");

module.exports = withPWA({
  future: {
    webpack5: true,
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
                "https://alexnault.dev",
                "https://excalidraw.com",
                "https://www.googletagmanager.com",
                "https://www.google-analytics.com",
                "https://vitals.vercel-insights.com",
              ],
              styleSrc: ["'self'", "'unsafe-inline'"],
              scriptSrc: [
                "'self'",
                "'unsafe-inline'",
                "https://www.googletagmanager.com",
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
});
