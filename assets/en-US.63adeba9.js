import{_ as s}from"./IconSfc.a60484c8.js";import{o as e,c as a,a5 as n}from"./vendor.bac705d4.js";const l={components:{}},c={class:"varlet-site-doc"},o=n(`<h1>Locale</h1><div class="card"><h3>Intro</h3><p>Component library uses Chinese as the default language, support multi-language switch, built-in support for <code>Chinese</code>, <code>English</code>.</p></div><div class="card"><h3>Multi-language switch</h3><p>The <code>Locale</code> component is introduced to realize multi-language switching, and <code>Locale.add</code> is used for language extension.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Locale } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>
<span class="hljs-keyword">import</span> enUS <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui/es/locale/en-US&#39;</span>

Locale.add(<span class="hljs-string">&#39;en-US&#39;</span>, enUS)
</code></pre><p>Use <code>Locale.use</code> to switch languages.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Locale.use(<span class="hljs-string">&#39;en-US&#39;</span>)
</code></pre><p>Use <code>Locale.merge</code> to merge languages.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Locale.merge(<span class="hljs-string">&#39;en-US&#39;</span>, {
  <span class="hljs-attr">dialogTitle</span>: <span class="hljs-string">&#39;Hello&#39;</span>
})
</code></pre></div>`,3),t=[o];function r(i,p,d,h,g,u){return e(),a("div",c,t)}var j=s(l,[["render",r]]);export{j as default};
