module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    },
  },
  // package-specs: {
  //   module: "es6",
  //   in-source: true,
  //   suffix: ".mjs"
  // },
};
