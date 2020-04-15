module.exports = {
  base: '/s-wheels-ui/',
  title: 'WheelsUI',
  description: 'UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '指南',
        children: ['install/','get-started/']
      },
      {
        title: '组件',
        children: [
          'components/button',
          'components/input',
          'components/popover',
          'components/tabs',
          'components/collapse'
        ]
      }
    ]
  }
}
