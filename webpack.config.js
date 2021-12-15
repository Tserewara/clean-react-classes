const path = require('path')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx', // a partir daqui todas os imports serão resolvidos
  output: {
    path: path.join(__dirname, 'public/js'), // o bundle é salvo nessa pasta
    publicPath: '/public/js',
    filename: 'bundle.js' // bundle vai aqui
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'], // extensões paras as quais estamos dando suporte
    alias: {
      '@': path.join(__dirname, 'src') // mapeamento conforme usado no ts para importar com @
    }
  },
  module: {
    rules: [{ // define quais os loaders serão usados para cada arquivo
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: { // permite acessar as propriedades de um arquivo scss no react dentro do tsx ex: Styles.myClass
          modules: true
        }
      }, {
        loader: 'sass-loader'
      }],
      exclude: /node_modules/
    }]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: {
      directory: './public'
    },
    historyApiFallback: true, // habilita rotas ao usar o react-router-dom
    port: 8080
  },
  externals: { // não coloca esses scripts no bundle, já que são importados no index.html
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('https://fordevs.herokuapp.com/api')
    })
  ]
}
