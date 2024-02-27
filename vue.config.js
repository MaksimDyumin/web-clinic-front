const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //     .test(/\.(png|jpe?g|gif|jp2|webp)$/)
  //     .use('url-loader')
  //     .loader('file-loader')
  //     .options({
  //       name: 'static/[name].[ext]',
  //     });
  // },
  // другие настройки
});