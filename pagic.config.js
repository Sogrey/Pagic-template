// @deno-types="https://deno.land/x/pagic@v0.8.4/src/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';
export default {
    srcDir: '.',
    outDir: 'dist',
    exclude: [],
    root: "/Pagic-template/",
    theme: 'docs',
    plugins: ['sidebar', 'prev_next', 'gitalk'],
    title: 'pagic模板',
    description: '一个pagic模板项目。',
    github: 'https://github.com/sogrey/pagic-template',
    head: React.createElement("link", { rel: "icon", type: "image/png", href: "/favicon.png" }),
    nav: [
        {
            text: '作者',
            link: 'https://sogrey.top/',
            target: '_blank',
            popover: (React.createElement(React.Fragment, null,
                React.createElement("img", { src: "/assets/wechat.jpg", width: "256", style: { marginRight: '1rem', verticalAlign: 'top' } }),
                React.createElement("img", { src: "/assets/alipay.jpg", width: "256", style: { verticalAlign: 'top' } })))
        }
    ],
    sidebar: {
        '/': [
            'README.md',
            {
                link: 'introduction/README.md',
                children: [
                    'introduction/introduction1.md',
                    'introduction/introduction2.md'
                ]
            },
            {
                link: 'basics/README.md',
                children: [
                    'basics/basics1.md',
                    'basics/basics2.md'
                ]
            },
            'thanks/README.md'
        ]
    },
    tools: {
        editOnGithub: true,
        backToTop: true
    },
    gitalk: {
        clientID: '158e9588da5b3bf66565',
        clientSecret: '9d1191980a7d801c149816a43a32320a1c134f98',
        repo: 'Pagic-template',
        owner: 'Sogrey',
        admin: ['Sogrey'],
        pagerDirection: 'first'
    },
    port: 8001
};
