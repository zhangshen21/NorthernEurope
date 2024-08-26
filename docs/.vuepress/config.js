module.exports = {
    title: '蔚名星球',
    base: '/NorthernEurope',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    themeConfig: {
        nav: [    // 修改导航栏内容
            { text: '首页', link: '/' },
            { text: '指南', link: '/handbook/Memos/guide.md' },
            // 你可以添加更多的导航项
          ],
        sidebar: [
            {
                title: 'Iceland',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "菜鸟", path: "/handbook/Iceland/菜鸟.md" },
                    { title: "git", path: "/handbook/Iceland/git.md" }
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