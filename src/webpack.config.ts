import * as path from "path";

import * as webpack from "webpack";

const config: webpack.Configuration = {
  entry: "./src/app.tsx",
  module: {
    rules: [
      {
        test: /\.ts*/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "..", "dist"),
  },
};

export default config;
