module.exports = {
    base: '/notes/',
    title: '🤏 一点笔记',
    description: '手摸手做笔记，记录编程技巧，工具使用，开发指南',
    dest: './public/notes',
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ],
    themeConfig: {
        repo: 'lddtime/hexo',
        docsDir: 'notes',
        editLinks: true,
        editLinkText: '帮我改善此页面！',
        lastUpdated: '上次更新',
        smoothScroll: true,
        nav: [
            { text: '博客首页', link: 'https://www.lddblog.com' },
            { text: '编程技巧', link: '/code/' },
            { text: '工具使用', link: '/tools/' },
            { text: '开发指南', link: '/guide/' },
        ],
        sidebar: {
            '/code/': getCodeSidebar(),
            '/tools/': getToolsSidebar(),
            '/guide/': getGuideSidebar(),
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true]
    ]
}

function getCodeSidebar () {
    return [

    ]
}

function getToolsSidebar () {
    return [
        {
            title: 'Homestead',
            collapsable: false,
            children: [
                'Homestead/enable-nfs'
            ]
        },
        {
            title: 'Postman',
            collapsable: false,
            children: [
                'Postman/variables-list'
            ]
        }
    ]
}

function getGuideSidebar () {
    return [

    ]
}