const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    publicPath: process.env.NODE_ENV === 'production' 
      ? process.env.PRODUCTION_URL 
      : 'http://localhost:3001/',
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new ModuleFederationPlugin({
      name: "balanceApp",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
        "./Balance": "./src/components/Balance",
      },
      shared: {
        react: { 
          singleton: true, 
          eager: true,
          requiredVersion: deps.react 
        },
        "react-dom": { 
          singleton: true, 
          eager: true,
          requiredVersion: deps["react-dom"]
        },
        "@mui/material": { 
          singleton: true,
          eager: true,
          requiredVersion: deps["@mui/material"]
        },
        "@emotion/react": { 
          singleton: true,
          eager: true,
          requiredVersion: deps["@emotion/react"]
        },
        "@emotion/styled": { 
          singleton: true,
          eager: true,
          requiredVersion: deps["@emotion/styled"]
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
}; 