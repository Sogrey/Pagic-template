import projectConfig from '/Pagic-template/pagic.config.js';
import Gitalk from '/Pagic-template/_gitalk.js';
export default {
    'prev': {
        "link": "introduction/index.html",
        "title": "简介"
    },
    'next': {
        "title": "简介二",
        "link": "introduction/introduction2.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "introduction/introduction1.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "introduction/introduction1.html",
    'title': "简介一",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>简介一</h1>\n<p>巴拉巴拉小魔仙</p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/Pagic-template/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7B80\u4ECB\u4E00"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>巴拉巴拉小魔仙</p>'
        } }),
    'toc': null,
    'author': "Sogrey",
    'contributors': [
        "Sogrey"
    ],
    'date': "2020-11-09T16:36:56.000Z",
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
        ], clientID: "158e9588da5b3bf66565", clientSecret: "6d2e07166ca2301b832c6d3c17feb70c6156b323", id: "introduction/introduction1.html", owner: "Sogrey", pagerDirection: "first", repo: "Pagic-template", title: "\u7B80\u4ECB\u4E00" })
};
