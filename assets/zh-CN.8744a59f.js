import{_ as s}from"./IconSfc.a60484c8.js";import{o as a,c as t,a5 as n}from"./vendor.bac705d4.js";const l={components:{}},p={class:"varlet-site-doc"},c=n(`<h1>Loading \u52A0\u8F7D</h1><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Loading } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Loading)
</code></pre></div><div class="card"><h3>Loading \u7C7B\u578B</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cube&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;wave&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;rect&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;disappear&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Loading \u989C\u8272</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #2979ff&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cube&quot;</span>  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #2979ff&quot;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;wave&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #2979ff&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;rect&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #2979ff&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;disappear&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #2979ff&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Loading \u5927\u5C0F</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circle&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;cube&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;wave&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;rect&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;disappear&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>color</code></td><td>loading \u7684\u989C\u8272</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>type</code></td><td>loading \u7684\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>circle</code> <code>wave</code> <code>cube</code> <code>rect</code> <code>disappear</code></td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>size</code></td><td>loading \u7684\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4F4D <code>large</code> <code>normal</code> <code>small</code> <code>mini</code></td><td><em>string</em></td><td><code>normal</code></td></tr></tbody></table></div>`,7),e=[c];function o(r,h,d,i,g,j){return a(),t("div",p,e)}var m=s(l,[["render",o]]);export{m as default};
