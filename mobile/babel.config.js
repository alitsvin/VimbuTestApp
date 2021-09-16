module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: [
          './app'
        ],
        alias: {
          '@app': './app',
          
          '@components': './app/components',
          '@screens': './app/screens',
          '@router': './app/router',

          '@types': './app/types',

          '@services': './app/services',
          '@utils': './app/utils',
          '@hooks': './app/hooks',

          '@ui': './app/ui',
        }
      } 
    ] 
  ]
};
