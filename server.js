const { serveHTTP } = require("stremio-addon-sdk");

const addonInterface = require("./addon");
serveHTTP(addonInterface, { port: process.env.PORT || 7000, host: '0.0.0.0' });
