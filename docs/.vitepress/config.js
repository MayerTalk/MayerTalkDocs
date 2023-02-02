import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: 'MayerTalk',
    description: '明日方舟对话编辑器 - MayerTalk - 聊天记录生成器',
    base: '/docs/',
    themeConfig: {
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Arkfans/MayerTalk'}
        ],
        editLink: {
            pattern: 'https://github.com/Arkfans/MayerTalkDocs/edit/main/docs/:path',
            text: '在 Github 上编辑此页'
        },
        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    items: [
                        {text: '快速上手', link: '/guide/start'},
                        {text: '特色功能', link: '/guide/feature'},
                        {text: '快捷键', link: '/guide/hot_key'}
                    ]
                }
            ]
        },
        nav: [
            {
                text: '指南',
                link: '/guide/start'
            },
            {text: '编辑器', link: 'https://www.mayertalk.top/'},
            {
                text: 'v0.1.2',
                items: [
                    {text:'更新日志',link:'/about/change_log'},
                    {text:'开发计划',link:'https://github.com/orgs/Arkfans/projects/2'}
                ]
            }
        ]
    },
    lastUpdated: true
})