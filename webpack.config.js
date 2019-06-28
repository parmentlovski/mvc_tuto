const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin'); // avant module export 
const devMode = process.env.MODE_ENV !== 'production'; // dit a webpack que je suis en mode dev
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {//les point d'entrées seront toujours des fichier js
  entry: './assets/js/app.js', // le point d'entrée, il se configure par rapport ou se situe le fichier webpack pour aller au fichier app.js
  output: {
    path: path.resolve(__dirname, 'public/js'), // le chemin de composition finale
    filename: 'script.js' // le nom qui sera donné au fichier
  },

  module: {
    rules: [{
      test: /\.s?[ac]ss$/,
      use: [
        MiniCSSExtractPlugin.loader,
        { loader: 'css-loader', options: { url: false, sourceMap: true } },
        { loader: 'sass-loader', options: { sourceMap: true } }
      ]
    },
    { 
      test: /\.js$/, // /\ => expression réguliere : soit va chercher tous les fichiers js
      exclude: /node_modules/, // exclure node_modules
      use: "babel-loader"
    }]
  },

  devtool: 'source-map',
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '../css/style.css'
    }),
    new CopyPlugin([
      { from: './assets/images', to: '../images' },
    ])
  ],
  
  mode: devMode ? 'development' : 'production'
};

