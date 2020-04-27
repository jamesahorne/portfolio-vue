const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'jamesahorne.dev | Front-end developer';
        args[0].meta = {
          'author': 'James Horne',
          'description': 'Hi, I\'m James. I build websites. I\'m a front-end web developer and this is my personal site. Interested? Contact me!',
          'og:url': 'https://www.jamesahorne.dev/',
          'og:type': 'website',
          'og:title': 'jamesahorne.dev | Front-end developer',
          'og:description': 'Hi, I\'m James. I build websites. I\'m a front-end web developer and this is my personal site. Interested? Contact me!',
          'og:image': 'https://www.jamesahorne.dev/img/my-portfolio.6b709c21.png'
        };
        return args;
      })
  }
}
