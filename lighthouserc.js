module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "maskable-icon": "off",
        "uses-rel-preconnect": "off",
        "unused-javascript": "off",
        "unused-css-rules": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
