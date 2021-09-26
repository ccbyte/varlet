import{_ as t}from"./IconSfc.a60484c8.js";import{o as e,c as s,a5 as d}from"./vendor.bac705d4.js";const a={components:{}},o={class:"varlet-site-doc"},c=d(`<h1>Card</h1><div class="card"><h3>Intro</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Card } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Card)
</code></pre></div><div class="card"><h3>Basic Use</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-card</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Little Prince&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me.&quot;</span>
/&gt;</span>
</code></pre></div><div class="card"><h3>Show Subtitle</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-card</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Little Prince&quot;</span>
  <span class="hljs-attr">subtitle</span>=<span class="hljs-string">&quot;where little prince from&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me.&quot;</span>
/&gt;</span>
</code></pre></div><div class="card"><h3>Show Image</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-card</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Little Prince&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Use Slot</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-card</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Little Prince&quot;</span>
  <span class="hljs-attr">subtitle</span>=<span class="hljs-string">&quot;where little prince from&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me.&quot;</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">extra</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 10px&quot;</span>&gt;</span>Use Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Use Button<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-card</span>&gt;</span>
</code></pre></div><div class="card"><h3>Ripple Effect</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-card</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Little Prince&quot;</span>
  <span class="hljs-attr">subtitle</span>=<span class="hljs-string">&quot;where little prince from&quot;</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;It took me a long time to learn where he came from. The little prince, whoasked me so many questions, never seemed to hear the ones I asked him. Itwas from words dropped by chance that, little by little, everything wasrevealed to me.&quot;</span>
  <span class="hljs-attr">ripple</span>
/&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>The title of Card</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>subtitle</code></td><td>The subtitle of Card</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>The description of Card</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>elevation</code></td><td>The shadow level of Card</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>src</code></td><td>The src of Image</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>Fillmode, opitions <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>cover</code></td></tr><tr><td><code>alt</code></td><td>Alt text</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>Heigth of Image</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>Whether to enable ripple</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>image</code></td><td>Custom image</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Custom title</td><td><code>-</code></td></tr><tr><td><code>subtitle</code></td><td>Custom subtitle</td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>Custom description</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>Custom bottom content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Events</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when the Card is click</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--card-padding</code></td><td><code>0 0 10px 0</code></td></tr><tr><td><code>--card-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--card-image-width</code></td><td><code>100%</code></td></tr><tr><td><code>--card-image-height</code></td><td><code>200px</code></td></tr><tr><td><code>--card-title-color</code></td><td><code>#333</code></td></tr><tr><td><code>--card-title-font-size</code></td><td><code>20px</code></td></tr><tr><td><code>--card-title-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--card-title-margin</code></td><td><code>10px 0 0 0</code></td></tr><tr><td><code>--card-subtitle-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--card-subtitle-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--card-subtitle-padding</code></td><td><code>0 13px</code></td></tr><tr><td><code>--card-subtitle-margin</code></td><td><code>10px 0 0 0</code></td></tr><tr><td><code>--card-description-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--card-description-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--card-description-margin</code></td><td><code>20px 0 0 0</code></td></tr><tr><td><code>--card-description-padding</code></td><td><code>0 13px</code></td></tr><tr><td><code>--card-footer-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--card-footer-margin</code></td><td><code>30px 0 0px 0</code></td></tr><tr><td><code>--card-line-height</code></td><td><code>22px</code></td></tr></tbody></table></div>`,12),r=[c];function n(l,i,p,h,m,g){return e(),s("div",o,r)}var v=t(a,[["render",n]]);export{v as default};
