module.exports = {
  ci: {
    collect: {
      staticDistDir: "./public",
      url: [
        "http://localhost/",
        "http://localhost/404",
        "http://localhost/functional-programming-with-javascript-in-3-steps",
        "http://localhost/dependency-inversion-principle-in-functional-typescript",
      ],
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "maskable-icon": "off",
        "uses-rel-preconnect": "off",
        "unused-javascript": "off",
        "unused-css-rules": "off",
        canonical: "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
