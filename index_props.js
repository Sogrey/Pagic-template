import projectConfig from '/Pagic-template/pagic.config.js';
import Gitalk from '/Pagic-template/_gitalk.js';
export default {
    'prev': undefined,
    'next': {
        "title": "简介",
        "link": "introduction/index.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "首页",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>首页</h1>\n<h2 id="install-deno">Install deno<a class="anchor" href="#install-deno">§</a></h2>\n<p>Deno ships as a single executable with no dependencies. You can install it using the installers below, or download a release binary from <a href="https://github.com/denoland/deno/releases">the releases page</a>.</p>\n<p>Shell (Mac, Linux):</p>\n<pre class="language-autoit"><code class="language-autoit">curl <span class="token operator">-</span>fsSL https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>install<span class="token operator">/</span>install<span class="token punctuation">.</span>sh | sh\n</code></pre>\n<p>PowerShell (Windows):</p>\n<pre class="language-autoit"><code class="language-autoit">iwr https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>install<span class="token operator">/</span>install<span class="token punctuation">.</span>ps1 <span class="token operator">-</span>useb | iex\n</code></pre>\n<p>Homebrew (Mac):</p>\n<pre class="language-autoit"><code class="language-autoit">brew install deno\n</code></pre>\n<p>Chocolatey (Windows):</p>\n<pre class="language-autoit"><code class="language-autoit">choco install deno\n</code></pre>\n<p>Scoop (Windows):</p>\n<pre class="language-autoit"><code class="language-autoit">scoop install deno\n</code></pre>\n<p>Build and install from source using Cargo</p>\n<pre class="language-autoit"><code class="language-autoit">cargo install deno\n</code></pre>\n<p>See deno_install for more installation options.</p>\n<h2 id="install-pagic">Install pagic<a class="anchor" href="#install-pagic">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit">deno install <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>run <span class="token operator">-</span><span class="token operator">-</span>name<span class="token operator">=</span>pagic https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts\n</code></pre>\n<h2 id="create-pagicconfigts-and-readmemd">Create pagic.config.ts and <a href="http://README.md">README.md</a><a class="anchor" href="#create-pagicconfigts-and-readmemd">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit">mkdir site <span class="token operator">&amp;</span><span class="token operator">&amp;</span> cd site <span class="token operator">&amp;</span><span class="token operator">&amp;</span> echo <span class="token string">"export default {};"</span> <span class="token operator">></span> pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts <span class="token operator">&amp;</span><span class="token operator">&amp;</span> echo <span class="token string">"# Hello world"</span> <span class="token operator">></span> README<span class="token punctuation">.</span>md\n</code></pre>\n<h2 id="run-pagic">Run pagic<a class="anchor" href="#run-pagic">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit">pagic build <span class="token operator">-</span><span class="token operator">-</span>watch <span class="token operator">-</span><span class="token operator">-</span>serve\n</code></pre>\n<p>自定义端口：</p>\n<p><code>--port 8001</code></p>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/Pagic-template/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u9996\u9875"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="install-deno">Install deno<a class="anchor" href="#install-deno">§</a></h2>\n<p>Deno ships as a single executable with no dependencies. You can install it using the installers below, or download a release binary from <a href="https://github.com/denoland/deno/releases">the releases page</a>.</p>\n<p>Shell (Mac, Linux):</p>\n<pre class="language-autoit"><code class="language-autoit">curl <span class="token operator">-</span>fsSL https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>install<span class="token operator">/</span>install<span class="token punctuation">.</span>sh | sh\n</code></pre>\n<p>PowerShell (Windows):</p>\n<pre class="language-autoit"><code class="language-autoit">iwr https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>install<span class="token operator">/</span>install<span class="token punctuation">.</span>ps1 <span class="token operator">-</span>useb | iex\n</code></pre>\n<p>Homebrew (Mac):</p>\n<pre class="language-autoit"><code class="language-autoit">brew install deno\n</code></pre>\n<p>Chocolatey (Windows):</p>\n<pre class="language-autoit"><code class="language-autoit">choco install deno\n</code></pre>\n<p>Scoop (Windows):</p>\n<pre class="language-autoit"><code class="language-autoit">scoop install deno\n</code></pre>\n<p>Build and install from source using Cargo</p>\n<pre class="language-autoit"><code class="language-autoit">cargo install deno\n</code></pre>\n<p>See deno_install for more installation options.</p>\n<h2 id="install-pagic">Install pagic<a class="anchor" href="#install-pagic">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit">deno install <span class="token operator">-</span><span class="token operator">-</span>unstable <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>read <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>write <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>net <span class="token operator">-</span><span class="token operator">-</span>allow<span class="token operator">-</span>run <span class="token operator">-</span><span class="token operator">-</span>name<span class="token operator">=</span>pagic https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>pagic<span class="token operator">/</span>mod<span class="token punctuation">.</span>ts\n</code></pre>\n<h2 id="create-pagicconfigts-and-readmemd">Create pagic.config.ts and <a href="http://README.md">README.md</a><a class="anchor" href="#create-pagicconfigts-and-readmemd">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit">mkdir site <span class="token operator">&amp;</span><span class="token operator">&amp;</span> cd site <span class="token operator">&amp;</span><span class="token operator">&amp;</span> echo <span class="token string">"export default {};"</span> <span class="token operator">></span> pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts <span class="token operator">&amp;</span><span class="token operator">&amp;</span> echo <span class="token string">"# Hello world"</span> <span class="token operator">></span> README<span class="token punctuation">.</span>md\n</code></pre>\n<h2 id="run-pagic">Run pagic<a class="anchor" href="#run-pagic">§</a></h2>\n<pre class="language-autoit"><code class="language-autoit">pagic build <span class="token operator">-</span><span class="token operator">-</span>watch <span class="token operator">-</span><span class="token operator">-</span>serve\n</code></pre>\n<p>自定义端口：</p>\n<p><code>--port 8001</code></p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#install-deno">Install deno</a></li><li><a href="#install-pagic">Install pagic</a></li><li><a href="#create-pagicconfigts-and-readmemd">Create pagic.config.ts and README.md</a></li><li><a href="#run-pagic">Run pagic</a></li></ol></nav>'
        } }),
    'author': "Sogrey",
    'contributors': [
        "Sogrey"
    ],
    'date': "2020-11-08T18:09:37.000Z",
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
        ], clientID: "158e9588da5b3bf66565", clientSecret: "9d1191980a7d801c149816a43a32320a1c134f98", id: "index.html", owner: "Sogrey", pagerDirection: "first", repo: "Pagic-template", title: "\u9996\u9875" })
};
