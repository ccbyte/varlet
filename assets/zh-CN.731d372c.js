import{_ as s}from"./IconSfc.a60484c8.js";import{o as a,c as t,a5 as n}from"./vendor.bac705d4.js";const l={components:{}},c={class:"varlet-site-doc"},p=n(`<h1>\u6309\u94AE</h1><div class="card"><h3>\u5F15\u5165</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Button)
</code></pre></div><div class="card"><h3>\u4E3B\u9898\u8272\u6309\u94AE</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>&gt;</span>\u9ED8\u8BA4\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u4E3B\u8981\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>\u4FE1\u606F\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u6210\u529F\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u8B66\u544A\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u5371\u9669\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u6587\u5B57\u6309\u94AE</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">text</span> <span class="hljs-attr">outline</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u5916\u8FB9\u6846\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">text</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u7EAF\u6587\u5B57\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u7981\u7528\u72B6\u6001</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">disabled</span>&gt;</span>\u7981\u7528\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">text</span> <span class="hljs-attr">outline</span>&gt;</span>\u7981\u7528\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">text</span>&gt;</span>\u7981\u7528\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u52A0\u8F7D\u72B6\u6001</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>
  \u52A0\u8F7D\u72B6\u6001
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;rect&quot;</span>&gt;</span>
  \u52A0\u8F7D\u72B6\u6001
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;disappear&quot;</span>&gt;</span>
  \u52A0\u8F7D\u72B6\u6001
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;cube&quot;</span>&gt;</span>
  \u52A0\u8F7D\u72B6\u6001
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">loading-type</span>=<span class="hljs-string">&quot;wave&quot;</span>&gt;</span>
  \u52A0\u8F7D\u72B6\u6001
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u6309\u94AE\u5C3A\u5BF8</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u5E38\u89C4\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>\u5C0F\u578B\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span>&gt;</span>\u8FF7\u4F60\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>&gt;</span>\u5927\u578B\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u5757\u7EA7\u6309\u94AE</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u5757\u7EA7\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u81EA\u5B9A\u4E49\u989C\u8272</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#69dbaa&quot;</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#eee&quot;</span>&gt;</span>\u80CC\u666F/\u6587\u5B57<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(to right, #69dbaa, #3a7afe)&quot;</span>
  <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#fff&quot;</span>
&gt;</span>
  \u4F7F\u7528\u6E10\u53D8
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u5706\u5F62\u6309\u94AE</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;plus&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;information&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;check&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;warning&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">round</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;window-close&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre></div><div class="card"><h3>\u6CE8\u518C\u4E8B\u4EF6</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick&quot;</span>&gt;</span>\u70B9\u51FB<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> @<span class="hljs-attr">touchstart</span>=<span class="hljs-string">&quot;handleTouchstart&quot;</span>&gt;</span>\u89E6\u6478<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> {
      Snackbar.success(<span class="hljs-string">&#39;\u70B9\u51FB\u6210\u529F&#39;</span>)
    }

    <span class="hljs-keyword">const</span> handleTouchstart = <span class="hljs-function">() =&gt;</span> {
      Snackbar.success(<span class="hljs-string">&#39;\u89E6\u6478\u6210\u529F&#39;</span>)
    }

    <span class="hljs-keyword">return</span> {
      handleClick,
      handleTouchstart
    }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>type</code></td><td>\u7C7B\u578B\uFF0C \u53EF\u9009\u503C\u4E3A <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>size</code></td><td>\u5C3A\u5BF8\uFF0C \u53EF\u9009\u503C\u4E3A <code>normal</code> <code>mini</code> <code>small</code> <code>large</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loading</code></td><td>\u52A0\u8F7D\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading-radius</code></td><td>loading\u7684\u534A\u5F84\uFF0C\u53EA\u4F5C\u7528\u4E8E <code>loading-type=&quot;circle&quot;</code> \u65F6</td><td><em>string | number</em></td><td><code>12</code></td></tr><tr><td><code>loading-type</code></td><td>loading\u7684\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>circle</code> <code>wave</code> <code>cube</code> <code>rect</code> <code>disappear</code></td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loading-size</code></td><td>loading\u7684\u5C3A\u5BF8\uFF0C\u53EF\u9009\u503C\u4E3A <code>large</code> <code>normal</code> <code>small</code> <code>mini</code> \u4E0D\u4F5C\u7528\u4E8E <code>loading-type=&quot;circle&quot;</code> \u65F6</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>round</code></td><td>\u662F\u5426\u662F\u5706\u5F62\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>block</code></td><td>\u662F\u5426\u662F\u5757\u7EA7\u5143\u7D20</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>text</code></td><td>\u662F\u5426\u662F\u6587\u5B57\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>outline</code></td><td>\u662F\u5426\u4F7F\u7528\u5916\u8FB9\u6846</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>\u7981\u7528\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>\u662F\u5426\u4F7F\u7528\u6C34\u6CE2\u7EB9</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>\u6587\u5B57\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>\u80CC\u666F\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>click</code></td><td>\u70B9\u51FB\u6309\u94AE\u65F6\u89E6\u53D1\uFF0C \u5728 <code>loading</code> \u6216 <code>disabled</code> \u72B6\u6001\u4E3A <code>true</code> \u65F6\u4E0D\u89E6\u53D1</td><td><code>event: Event</code></td></tr><tr><td><code>touchstart</code></td><td>\u89E6\u6478\u624B\u6307\u538B\u4E0B\u6309\u94AE\u65F6\u89E6\u53D1\uFF0C \u5728 <code>loading</code> \u6216 <code>disabled</code> \u72B6\u6001\u4E3A <code>true</code> \u65F6\u4E0D\u89E6\u53D1</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u6309\u94AE\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684css\u53D8\u91CF,\u53EF\u4EE5\u4F7F\u7528<a href="#/zh-CN/style-provider">StyleProvider\u7EC4\u4EF6</a>\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--button-default-color</code></td><td><code>#f5f5f5</code></td></tr><tr><td><code>--button-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--button-danger-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--button-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--button-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--button-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--button-disabled-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--button-disabled-text-color</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--button-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--button-mini-padding</code></td><td><code>0 9px</code></td></tr><tr><td><code>--button-small-padding</code></td><td><code>0 11px</code></td></tr><tr><td><code>--button-normal-padding</code></td><td><code>0 15px</code></td></tr><tr><td><code>--button-large-padding</code></td><td><code>0 22px</code></td></tr><tr><td><code>--button-round-padding</code></td><td><code>6px</code></td></tr><tr><td><code>--button-mini-height</code></td><td><code>20px</code></td></tr><tr><td><code>--button-small-height</code></td><td><code>28px</code></td></tr><tr><td><code>--button-normal-height</code></td><td><code>36px</code></td></tr><tr><td><code>--button-large-height</code></td><td><code>44px</code></td></tr></tbody></table></div>`,16),e=[p];function d(o,r,h,j,g,i){return a(),t("div",c,e)}var b=s(l,[["render",d]]);export{b as default};
