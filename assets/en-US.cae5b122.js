import{_ as s}from"./IconSfc.a60484c8.js";import{o as t,c as a,a5 as e}from"./vendor.bac705d4.js";const d={components:{}},n={class:"varlet-site-doc"},l=e(`<h1>Divider</h1><div class="card"><h3>Intro</h3><p>Used to separate parts of a list or layout.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Divider } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Divider)
</code></pre></div><div class="card"><h3>Basic Usage</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Dashed Divider</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">dashed</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Inset Divider</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">inset</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">:inset</span>=<span class="hljs-string">&quot;36&quot;</span> <span class="hljs-attr">margin</span>=<span class="hljs-string">&quot;36px 0&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">inset</span>=<span class="hljs-string">&quot;-36px&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Vertical Divider</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Text<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">vertical</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Text<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">vertical</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Text<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
</code></pre></div><div class="card"><h3>The Divider with description</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span> <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Custom</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-divider</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;heart-outline&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 0 16px; color: rgb(41, 121, 255);&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-divider</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>inset</code></td><td>Set the indentation distance, and the number plus or minus sign controls the direction of indentation. The default indentation is <code>72px</code> when <code>true</code> is passed</td><td><em>boolean | number | string</em></td><td><code>false</code></td></tr><tr><td><code>vertical</code></td><td>Whether to set divider to display vertically</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>dashed</code></td><td>Whether divider is dashed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>description</code></td><td>The text description of divider</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>margin</code></td><td>Set <code>margin</code> of divider</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom content of divider</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--divider-color</code></td><td><code>#bcc2cb</code></td></tr><tr><td><code>--divider-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--divider-text-margin</code></td><td><code>8px 0</code></td></tr><tr><td><code>--divider-text-padding</code></td><td><code>0 8px</code></td></tr><tr><td><code>--divider-inset</code></td><td><code>72px</code></td></tr><tr><td><code>--divider-vertical-inset</code></td><td><code>8px</code></td></tr></tbody></table></div>`,13),c=[l];function r(i,p,h,o,v,g){return t(),a("div",n,c)}var u=s(d,[["render",r]]);export{u as default};
