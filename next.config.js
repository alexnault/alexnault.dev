/* eslint-disable @typescript-eslint/no-var-requires */
const { withPlaiceholder } = require("@plaiceholder/next");
const { createSecureHeaders } = require("next-secure-headers");

const config = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...createSecureHeaders({
            referrerPolicy: "strict-origin-when-cross-origin",
            contentSecurityPolicy: {
              directives: {
                defaultSrc: [
                  "'self'",
                  "alexnault.dev",
                  "excalidraw.com",
                  "*.vercel-insights.com",
                ],
                styleSrc: ["'self'", "'unsafe-inline'"],
                scriptSrc: [
                  "'self'",
                  "'unsafe-inline'",
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
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

module.exports = withPlaiceholder(config);
