const { normalizeURL } = require('./crawl.js')
const { getURLsFromHTML } = require('./crawl.js')

console.log(normalizeURL("https://FRED.mywebsite.com/somepath"))


const htmlBody = '<li><a href="assert.html" class="nav-assert">Assertion testing</a></li>\
<li><a href="async_context.html" class="nav-async_context">Asynchronous context tracking</a></li>\
<li><a href="async_hooks.html" class="nav-async_hooks">Async hooks</a></li>\
<li><a href="buffer.html" class="nav-buffer">Buffer</a></li>\
<li><a href="addons.html" class="nav-addons">C++ addons</a></li>\
<li><a href="n-api.html" class="nav-n-api">C/C++ addons with Node-API</a></li>\
<li><a href="embedding.html" class="nav-embedding">C++ embedder API</a></li>\
<li><a href="child_process.html" class="nav-child_process">Child processes</a></li>\
<li><a href="cluster.html" class="nav-cluster">Cluster</a></li>\
<li><a href="cli.html" class="nav-cli">Command-line options</a></li>\
<li><a href="console.html" class="nav-console">Console</a></li>\
<li><a href="corepack.html" class="nav-corepack">Corepack</a></li>\
<li><a href="crypto.html" class="nav-crypto">Crypto</a></li>\
<li><a href="debugger.html" class="nav-debugger">Debugger</a></li>\
<li><a href="deprecations.html" class="nav-deprecations">Deprecated APIs</a></li>\
<li><a href="diagnostics_channel.html" class="nav-diagnostics_channel">Diagnostics Channel</a></li>\
<li><a href="dns.html" class="nav-dns">DNS</a></li>\
<li><a href="domain.html" class="nav-domain">Domain</a></li>\
<li><a href="errors.html" class="nav-errors">Errors</a></li>\
<li><a href="events.html" class="nav-events">Events</a></li>\
<li><a href="fs.html" class="nav-fs">File system</a></li>\
<li><a href="globals.html" class="nav-globals">Globals</a></li>\
<li><a href="http.html" class="nav-http">HTTP</a></li>\
<li><a href="http2.html" class="nav-http2">HTTP/2</a></li>\
<li><a href="https.html" class="nav-https">HTTPS</a></li>\
<li><a href="inspector.html" class="nav-inspector">Inspector</a></li>\
<li><a href="intl.html" class="nav-intl">Internationalization</a></li>\
<li><a href="modules.html" class="nav-modules">Modules: CommonJS modules</a></li>\
<li><a href="esm.html" class="nav-esm">Modules: ECMAScript modules</a></li>\
<li><a href="module.html" class="nav-module">Modules: <code>node:module</code> API</a></li>\
<li><a href="packages.html" class="nav-packages">Modules: Packages</a></li>\
<li><a href="net.html" class="nav-net">Net</a></li>\
<li><a href="os.html" class="nav-os">OS</a></li>\
<li><a href="path.html" class="nav-path">Path</a></li>\
'

console.log(getURLsFromHTML(htmlBody ,'www.boot.dev'))