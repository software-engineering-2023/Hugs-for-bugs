const path = require('path');

module.exports = {
  entry: './src/components/mohamed/Apply_for_a_credit_card/index.html', // Entry point of your application
  output: {
    path: path.resolve(__dirname, './src/components/mohamed/Apply_for_a_credit_card/index.html'), // Output directory
    filename: 'bundle.js', // Output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Apply the loader to JavaScript and JSX files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling JSX code
          options: {
            presets: ['@babel/preset-react'], // Use the @babel/preset-react preset for JSX
          },
        },
      },
      // Add other rules for different file types if needed
    ],
  },
  resolve: {
    extensions: ['.html', '.jsx'], // Resolve .js and .jsx files without specifying the file extension
  },
};
