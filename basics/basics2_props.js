import projectConfig from '/Pagic-template/pagic.config.js';
import Gitalk from '/Pagic-template/_gitalk.js';
export default {
    'prev': {
        "title": "基础内容一",
        "link": "basics/basics1.html"
    },
    'next': {
        "title": "感谢",
        "link": "thanks/index.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "basics/basics2.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "basics/basics2.html",
    'title': "基础内容二",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>基础内容二</h1>\n<p>基础内容二</p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/Pagic-template/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u57FA\u7840\u5185\u5BB9\u4E8C"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>基础内容二</p>'
        } }),
    'toc': null,
    'author': "Sogrey",
    'contributors': [
        "Sogrey"
    ],
    'date': "2020-11-09T01:46:39.000Z",
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
        ], clientID: "158e9588da5b3bf66565", clientSecret: "6d2e07166ca2301b832c6d3c17feb70c6156b323", id: "basics/basics2.html", owner: "Sogrey", pagerDirection: "first", repo: "Pagic-template", title: "\u57FA\u7840\u5185\u5BB9\u4E8C" })
};
