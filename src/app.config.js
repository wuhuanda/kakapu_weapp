module.exports = {
  pages: [
    'pages/home/home/index',
    'pages/home/found/index',
    'pages/home/my/index',
  ],
  window: {
    navigationBarTitleText: 'KokaRss',
    navigationBarBackgroundColor: '#282c34',
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/home/index',
        text: '首页',
      },
      {
        pagePath: 'pages/home/found/index',
        text: '发现',
      },
      {
        pagePath: 'pages/home/my/index',
        text: '我的',
      },
    ],
  },
};
