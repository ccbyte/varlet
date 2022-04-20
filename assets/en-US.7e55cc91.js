import{_ as t}from"./elevation.de90c470.js";import{e as o,o as r,c,a as s,i as a,j as n,m as e}from"./vendor.a72d4487.js";const h={components:{}},d={class:"varlet-site-doc"},p=s("h1",null,"Dark Mode",-1),i=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"The first party of the component library provides the theme of dark mode. The advantage of dark mode is that it has higher readability in low light environments.")],-1),u={class:"card"},m=s("h3",null,"Toggle Theme",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[e("<"),s("span",{class:"hljs-name"},"var-button"),e(),s("span",{class:"hljs-attr"},"block"),e(" @"),s("span",{class:"hljs-attr"},"click"),e("="),s("span",{class:"hljs-string"},'"toggleTheme"'),e(">")]),e("Toggle Theme"),s("span",{class:"hljs-tag"},[e("</"),s("span",{class:"hljs-name"},"var-button"),e(">")]),e(`
`)])],-1),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" dark "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui/es/themes/dark'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(" { StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

`),s("span",{class:"hljs-keyword"},"export"),e(),s("span",{class:"hljs-keyword"},"default"),e(` {
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"setup"),e("("),s("span",{class:"hljs-params"}),e(")")]),e(` {
    `),s("span",{class:"hljs-keyword"},"let"),e(` currentTheme
    
    `),s("span",{class:"hljs-keyword"},"const"),e(" toggleTheme = "),s("span",{class:"hljs-function"},"() =>"),e(` {
      currentTheme = currentTheme ? `),s("span",{class:"hljs-literal"},"null"),e(` : dark
      StyleProvider(currentTheme)
    }
    
    `),s("span",{class:"hljs-keyword"},"return"),e(` { toggleTheme }
  }
}
`)])],-1),g=s("p",null,[e("Inject the "),s("code",null,"text color"),e(" and "),s("code",null,"background color"),e(" variables recommended by the component library to control the overall color")],-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"/* playground-ignore */"),e(`
`),s("span",{class:"hljs-selector-tag"},"body"),e(` {
  `),s("span",{class:"hljs-attribute"},"transition"),e(": background-color ."),s("span",{class:"hljs-number"},"25s"),e(`;
  `),s("span",{class:"hljs-attribute"},"color"),e(": "),s("span",{class:"hljs-built_in"},"var"),e(`(--color-text);
  `),s("span",{class:"hljs-attribute"},"background-color"),e(": "),s("span",{class:"hljs-built_in"},"var"),e(`(--color-body);
}
`)])],-1);function v(b,f,y,T,w,x){const l=o("var-site-code-example");return r(),c("div",d,[p,i,s("div",u,[m,a(l,null,{default:n(()=>[_]),_:1}),a(l,null,{default:n(()=>[j]),_:1}),g,a(l,null,{default:n(()=>[k]),_:1})])])}var N=t(h,[["render",v]]);export{N as default};