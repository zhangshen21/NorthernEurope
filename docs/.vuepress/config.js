module.exports = {
    title: 'TypeScript4 文档',
    description: 'TypeScript4 最新官方文档翻译',
    base: '/NorthernEurope',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    themeConfig: {
        nav: [    // 修改导航栏内容
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '关于', link: '/about/' },
            // 你可以添加更多的导航项
          ],
        sidebar: [
            {
                title: 'Iceland',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "菜鸟", path: "/handbook/Iceland/菜鸟.md" }
                ]
            },
            {
                title: "Denmark",
                path: '/handbook', // 修改为父路径
                collapsable: false, // 不折叠
                children: [
                    { title: "newer", path: "/handbook/Denmark/newer.md" }
                ],
            }
        ]
    }
}