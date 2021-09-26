import{_ as t}from"./IconSfc.a60484c8.js";import{o as e,c as s,a5 as d}from"./vendor.bac705d4.js";const a={components:{}},n={class:"varlet-site-doc"},o=d(`<h1>Counter</h1><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Counter } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Counter)
</code></pre></div><div class="card"><h3>Basic Usage</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">0</span>)

    <span class="hljs-keyword">return</span> { value }
  }
}
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>Set the value range</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>Set step</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">:step</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>Decimal length</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">:decimal-length</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Set size</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span>
  <span class="hljs-attr">input-text-size</span>=<span class="hljs-string">&quot;18px&quot;</span>
  <span class="hljs-attr">input-width</span>=<span class="hljs-string">&quot;50px&quot;</span>
  <span class="hljs-attr">button-size</span>=<span class="hljs-string">&quot;36px&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
/&gt;</span>
</code></pre></div><div class="card"><h3>Disabled</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>Readonly</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>Asynchronous change</h3><p>In some scenarios, you may need to wait for the server to return successfully before making changes. <code>lazy-change</code> prevents binding value updates on the component itself. Register <code>before-change</code> events for manual updates.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span>
  <span class="hljs-attr">lazy-change</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
  @<span class="hljs-attr">before-change</span>=<span class="hljs-string">&quot;handleBeforeChange&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-number">0</span>)

    <span class="hljs-keyword">const</span> handleBeforeChange = <span class="hljs-function">(<span class="hljs-params">value, change</span>) =&gt;</span> {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> change(value), <span class="hljs-number">500</span>)
    }

    <span class="hljs-keyword">return</span> {
      value,
      handleBeforeChange
    }
  }
}
</code></pre></div><div class="card"><h3>Validate</h3><p>The values are validated by passing in an array of validators\uFF0CIf the validator returns <code>true</code>, the validation passes. Other values are converted to text as a user prompt.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-counter</span>
  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[v =&gt; v &gt; 5 || &#39;Please select a value greater than 5&#39;]&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
/&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>min</code></td><td>Minimum value</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>Maximum value</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>step</code></td><td>Step size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>decimal-length</code></td><td>Preserve decimal places</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>Background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>input-width</code></td><td>The width of the input box</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>input-text-size</code></td><td>The text size of the input box</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>button-size</code></td><td>Button size</td><td><em>string</em></td><td><code>true</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disable-increment</code></td><td>Whether to disable increments</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disable-decrement</code></td><td>Whether to disable decrements</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disable-input</code></td><td>Whether to disable input</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>increment-button</code></td><td>Whether to display the increment button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>decrement-button</code></td><td>Whether to display the decrement button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>press</code></td><td>Long press the open button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation\uFF0COptional value is <code>onInputChange</code> <code>onLazyChange</code> <code>onIncrement</code> <code>onDecrement</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onIncrement&#39;, &#39;onDecrement&#39;, &#39;onInputChange&#39;, &#39;onLazyChange&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(value: number) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>min || 0</code>)and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>before-change</code></td><td>Triggered before the change (lazy-change mode only)</td><td><code>value: number, change: (value: string | number) =&gt; void</code></td></tr><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: number</code></td></tr><tr><td><code>increment</code></td><td>Triggered on increment</td><td><code>value: number</code></td></tr><tr><td><code>decrement</code></td><td>Triggered on decrement</td><td><code>value: number</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--counter-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--counter-font-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--counter-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--counter-input-width</code></td><td><code>28px</code></td></tr><tr><td><code>--counter-input-margin</code></td><td><code>0 4px</code></td></tr><tr><td><code>--counter-input-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--counter-button-size</code></td><td><code>28px</code></td></tr><tr><td><code>--counter-button-icon-size</code></td><td><code>100%</code></td></tr><tr><td><code>--counter-disabled-color</code></td><td><code>#aaa</code></td></tr><tr><td><code>--input-error-color</code></td><td><code>var(--color-danger</code>)</td></tr></tbody></table></div>`,16),c=[o];function r(l,h,p,i,u,g){return e(),s("div",n,c)}var j=t(a,[["render",r]]);export{j as default};
