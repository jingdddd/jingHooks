(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{MZF8:function(e,t,n){"use strict";var o=n("ogwx");n.d(t,"a",(function(){return o["b"]}));n("VCU9")},OYlG:function(e,t,n){"use strict";n.r(t);var o=n("mn0l"),s=n("ahKI"),i=n.n(s),r=n("RGYn"),a=n("DBVu"),u=n("GAyR"),l=n("7JWa"),c="import React from 'react';\nimport { useToggle } from 'jingHooks';\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight }] = useToggle();\n\n  return (\n    <div>\n      <p>Effects\uff1a{`${state}`}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={setLeft} style={{ margin: '0 8px' }}>\n          Toggle False\n        </button>\n        <button type=\"button\" onClick={setRight}>\n          Toggle True\n        </button>\n      </p>\n    </div>\n  );\n};",p={"usetoggle-demo1":{component:Object(l["dynamic"])({loader:function(){var e=Object(u["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:c}},dependencies:{react:{version:"18.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",description:'<div class="markdown"><p>\u9ed8\u8ba4\u4e3a boolean \u5207\u6362\uff0c\u57fa\u7840\u7528\u6cd5\u4e0e useBoolean \u4e00\u81f4\u3002</p></div>',identifier:"usetoggle-demo1"}}},g=n("Zs1V"),d=n("XyB1"),b=n.n(d);t["default"]=e=>i.a.createElement(b.a,Object(o["a"])({},e,{config:r,demos:p,apis:g}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}],"/hooks":[{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle"}]}],"/":[{"title":"\u9996\u9875","path":"index"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"}]},"title":"react hooks","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);