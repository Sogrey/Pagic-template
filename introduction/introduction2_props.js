import projectConfig from '/pagic-template/pagic.config.js';
import Gitalk from '/pagic-template/_gitalk.js';
export default {
    'prev': {
        "title": "简介一",
        "link": "introduction/introduction1.html"
    },
    'next': {
        "link": "basics/index.html",
        "title": "基础"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "introduction/introduction2.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "introduction/introduction2.html",
    'title': "简介二",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>简介二</h1>\n<p>对方让他人员已婚已育特一药业</p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic-template/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7B80\u4ECB\u4E8C"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>对方让他人员已婚已育特一药业</p>'
        } }),
    'toc': null,
    'author': "Sogrey",
    'contributors': [
        "Sogrey"
    ],
    'date': "2020-11-08T18:06:14.000Z",
    'updated': null,
    'sidebar': [
        {
            "title": "首页",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "title": "简介一",
                    "link": "introduction/introduction1.html",
                    "pagePath": "introduction/introduction1.md"
                },
                {
                    "title": "简介二",
                    "link": "introduction/introduction2.html",
                    "pagePath": "introduction/introduction2.md"
                }
            ],
            "title": "简介",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "title": "基础内容一",
                    "link": "basics/basics1.html",
                    "pagePath": "basics/basics1.md"
                },
                {
                    "title": "基础内容二",
                    "link": "basics/basics2.html",
                    "pagePath": "basics/basics2.md"
                }
            ],
            "title": "基础",
            "pagePath": "basics/README.md"
        },
        {
            "title": "感谢",
            "link": "thanks/index.html",
            "pagePath": "thanks/README.md"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'Sogrey'
        ], clientID: "158e9588da5b3bf66565", clientSecret: "9d1191980a7d801c149816a43a32320a1c134f98", id: "introduction/introduction2.html", owner: "Sogrey", pagerDirection: "first", repo: "Pagic-template", title: "\u7B80\u4ECB\u4E8C" })
};
