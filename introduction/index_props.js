import projectConfig from '/pagic-template/pagic.config.js';
import Gitalk from '/pagic-template/_gitalk.js';
export default {
    'prev': {
        "title": "首页",
        "link": "index.html"
    },
    'next': {
        "title": "简介一",
        "link": "introduction/introduction1.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "introduction/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "introduction/index.html",
    'title': "简介",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>简介</h1>\n<p>具体内容包括：</p>\n<ul>\n<li><a href="introduction1.html">简介一</a></li>\n<li><a href="introduction2.html">简介二</a></li>\n</ul>\n<h2 id="%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%98">二级标题<a class="anchor" href="#%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%98">§</a></h2>\n<h2 id="%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%982">二级标题2<a class="anchor" href="#%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%982">§</a></h2>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic-template/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u7B80\u4ECB"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>具体内容包括：</p>\n<ul>\n<li><a href="introduction1.html">简介一</a></li>\n<li><a href="introduction2.html">简介二</a></li>\n</ul>\n<h2 id="%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%98">二级标题<a class="anchor" href="#%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%98">§</a></h2>\n<h2 id="%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%982">二级标题2<a class="anchor" href="#%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%982">§</a></h2>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%98">二级标题</a></li><li><a href="#%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%982">二级标题2</a></li></ol></nav>'
        } }),
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
        ], clientID: "158e9588da5b3bf66565", clientSecret: "9d1191980a7d801c149816a43a32320a1c134f98", id: "introduction/index.html", owner: "Sogrey", pagerDirection: "first", repo: "Pagic-template", title: "\u7B80\u4ECB" })
};
