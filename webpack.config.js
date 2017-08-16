var webpack = require('webpack');
var path = require("path");

module.exports = {       
    // rules: [
    //   {
    //     test: /\.jsx?$/,
    //     enforce: 'pre',
    //     exclude: /(node_modules|bower_components|\.spec\.js)/,
    //     use: [
    //       'webpack-strip-block?start=devcode:start&end=devcode:end'
    //     ]
    //   }
    // ],
    entry: [        
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',  
        './app/app.jsx'      
        
        
    ],
    externals: {
        jquery: 'jQuery',
        // foundation: 'Foundation'    

    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {   
        root: __dirname,
        //the following where necessary to use webpack with foundation and jquery            
        modules: [
        path.resolve('./client'),
        path.resolve(__dirname,'src'), 'node_modules',
        path.resolve('./node_modules')
        ],

        alias: {            
            Main: 'app/components/Main.jsx',   
            applicationStyles: 'app/styles/app.scss', 
            Nav: 'app/components/Nav.jsx',
            Timer: 'app/components/Timer.jsx', 
            Countdown: 'app/components/Countdown.jsx'
            
        },
        extensions: ['', '.js', '.jsx']
    },
    
     
    module :{
        
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'es2016']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    // rules:[{
    //   use : [
    //       "babel-loader",
    //       "style-loader",
    //       "css-loader",
    //       "less-loader"
    //   ],
    //   query :{
    //     presets:['react','es2015','es2017']
    //   },
    //   resolveLoader: {
    //     moduleExtensions: ["-loader"]
    //   },
    //   test: /\.jsx?$/,
    //   enforce: "pre",
    //   loader: "eslint-loader",
    //   exclude: /(node_modules|bower_components)/
    // }]
  },    
    //source-map: tool takes the original code and allows for debugging in browser
    sassLoader:{
    includePaths:[
    path.resolve(__dirname,'./node_modules/foundation-sites/scss')
    ]
  },
};
