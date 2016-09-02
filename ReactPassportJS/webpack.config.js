module.exports = {

     //selected src file/s for bundling
     entry: __dirname + '/client/src/app.jsx',

     //bundled file/s conact and transformed into
     output: {
          path: __dirname + '/client/dist/js',
          filename: 'bundledJStuff.js',
     },

     module: {

          //loaders code needs to be passed through
          loaders: [{
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel',
               query: {
                    presets: ["react", "es2015"]
               }
          }],
     },

     //webpack change on watch command
     watch: true

};
