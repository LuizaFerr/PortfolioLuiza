const path = require('path');

module.exports = {
    mode: 'development', // o 'production'
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
              {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader'
                ]
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
            ],
          },
    
   
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
