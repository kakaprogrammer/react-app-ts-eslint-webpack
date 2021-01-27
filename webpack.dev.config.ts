import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
//import createStyledComponentsTransformer from 'typescript-plugin-styled-components'


// 2. create a transformer;
// the factory additionally accepts an options object which described below
//const styledComponentsTransformer = createStyledComponentsTransformer();

const config: webpack.Configuration = {
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|js|svg)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //     },
      //   ],
      // },
      // {
      //   test: /\.tsx?$/,
      //   loader: 'awesome-typescript-loader',
      //   options: {
      //       // other loader's options
      //       getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
      //   }
      // },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"], // load project styles via style-loader
      //   exclude: /node_modules/, 
      // },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".svg"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      favicon: "./src/favicon.gif",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
};

export default config;
