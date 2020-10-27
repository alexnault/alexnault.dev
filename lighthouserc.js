module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "maskable-icon": "off",
        "uses-rel-preconnect": "off",
        "works-offline": "off",
        "unused-javascript": "off",
        "unused-css-rules": "off",
        "offline-start-url": "off",
        "service-worker": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
