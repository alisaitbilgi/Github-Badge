const path = require("path");
const testHelperPath = path.resolve("test/testHelper.js");


module.exports = function(config) {
  config.set({
    basePath: "",

    frameworks: ["mocha", "chai", "sinon"],

    files: [
      testHelperPath
    ],

    reporters: ["progress", "coverage"],

    preprocessors: {
      [testHelperPath]: [
        "webpack",
        "sourcemap"
      ],
      "src/**/*.js": ["webpack", "sourcemap", "coverage"]
    },

    webpack: {
      devtool: "inline-source-map",
      externals: {
        cheerio: "window",
        "react/addons": true,
        "react/lib/ExecutionEnvironment": true,
        "react/lib/ReactContext": true
      },
      module: {
        preLoaders: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "eslint"
          }
        ],
        loaders: [
          {
            test: /\.js$/,
            include: path.resolve("src/"),
            loader: "istanbul-instrumenter"
          },
          {
            exclude: [
              /\.(js|jsx)$/,
              /\.css$/,
              /\.json$/,
            ],
            loader: "file",
            query: {
              name: "static/media/[name].[hash:8].[ext]"
            }
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules\/(?!(genericxhr)\/).*/,
            loader: "babel"
          },
          {
            test: /\.css$/,
            loader: "style!css"
          },
          {
            test: /\.json$/,
            loader: "json"
          }
        ]
      },
      resolve: {
        root: path.resolve("./src")
      }
    },

    webpackMiddleware: {
      stats: "errors-only"
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["PhantomJS"],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
