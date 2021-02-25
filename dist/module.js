/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","emotion","@grafana/runtime","@grafana/data"],(function(e,n,t,a,o){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=5)}([function(n,t){n.exports=e},function(e,t){e.exports=n},function(e,n){e.exports=t},function(e,n){e.exports=a},function(e,n){e.exports=o},function(e,n,t){"use strict";t.r(n);var a=t(4);function o(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var r,l,i,c,s,u,b,f,d,h,m,p,g,x,v,E,y,k,O,C=t(0),z=t.n(C),w=t(2),S=t(1),j=t(3),L=function(e){e.ctrlKey&&alert("X:"+e.nativeEvent.offsetX+" Y:"+e.nativeEvent.offsetY)},H=Object(S.stylesFactory)((function(){return{wrapper:Object(w.css)(m||(m=o(["\n      display: flex;\n      justify-content: center;\n    "],["\n      display: flex;\n      justify-content: center;\n    "]))),imgWrapper:Object(w.css)(p||(p=o(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),box:Object(w.css)(g||(g=o(["\n      position: absolute;\n    "],["\n      position: absolute;\n    "]))),boxLink:Object(w.css)(x||(x=o(["\n      display: inline-block;\n      text-align: center;\n      color: unset;\n      &:hover {\n        color: unset;\n      }\n      &:focus {\n        color: unset;\n      }\n    "],["\n      display: inline-block;\n      text-align: center;\n      color: unset;\n      &:hover {\n        color: unset;\n      }\n      &:focus {\n        color: unset;\n      }\n    "]))),orbDefaults:Object(w.css)(v||(v=o(["\n      border-radius: 50%;\n      border-style: solid;\n      border-width: thin;\n      border-color: #000;\n      display: inline-block;\n      font-size: 0px;\n    "],["\n      border-radius: 50%;\n      border-style: solid;\n      border-width: thin;\n      border-color: #000;\n      display: inline-block;\n      font-size: 0px;\n    "]))),blink:Object(w.css)(E||(E=o(["\n      animation: blink_anim 0.8s linear infinite;\n      @keyframes blink_anim {\n        50% {\n          opacity: 0.2;\n        }\n      }\n    "],["\n      animation: blink_anim 0.8s linear infinite;\n      @keyframes blink_anim {\n        50% {\n          opacity: 0.2;\n        }\n      }\n    "]))),alignVertically:Object(w.css)(y||(y=o(["\n      display: inline-block;\n      white-space: normal;\n      vertical-align: middle;\n    "],["\n      display: inline-block;\n      white-space: normal;\n      vertical-align: middle;\n    "]))),boxPrefix:Object(w.css)(k||(k=o(["\n      white-space: pre;\n      margin-right: 0.5ch;\n    "],["\n      white-space: pre;\n      margin-right: 0.5ch;\n    "]))),boxSuffix:Object(w.css)(O||(O=o(["\n      white-space: pre;\n      margin-right: 0.5ch;\n    "],["\n      white-space: pre;\n      margin-right: 0.5ch;\n    "])))}})),T=function(){};t.d(n,"plugin",(function(){return F}));var F=new a.PanelPlugin((function(e){var n=e.options,t=e.data,a=(e.width,e.height,Object(j.getTemplateSrv)().replace(n.bgURL)),m=n.boxes,p=H();return z.a.createElement("div",{className:Object(w.cx)(p.wrapper)},z.a.createElement("div",{className:Object(w.cx)(p.imgWrapper),id:"img-wrapper"},z.a.createElement("img",{srcSet:a,onClick:function(e){return L(e)}}),m.map((function(e,n){return z.a.createElement("span",{className:Object(w.cx)(p.box,Object(w.css)(r||(r=o(["\n                top: ","px;\n                left: ","px;\n                color: ",";\n                transform: rotate(","deg);\n              "],["\n                top: ","px;\n                left: ","px;\n                color: ",";\n                transform: rotate(","deg);\n              "])),e.ypos,e.xpos,x(e),e.angle))},z.a.createElement("a",{href:e.url?Object(j.getTemplateSrv)().replace(e.url):"#",className:Object(w.cx)(p.boxLink,e.url?Object(w.css)(l||(l=o(["\n                      cursor: pointer;\n                    "],["\n                      cursor: pointer;\n                    "]))):Object(w.css)(i||(i=o(["\n                      cursor: default;\n                    "],["\n                      cursor: default;\n                    "]))))},e.hasOrb&&e.orbHideText||e.hasOrb&&!e.orbHideText&&"Top"===e.orbLocation?z.a.createElement("span",{className:Object(w.cx)(g(e)?p.blink:"",p.orbDefaults,Object(w.css)(c||(c=o(["\n                      height: ","px;\n                      width: ","px;\n                      background-color: ",";\n                    "],["\n                      height: ","px;\n                      width: ","px;\n                      background-color: ",";\n                    "])),e.orbSize,e.orbSize,x(e))),title:v(e)}):null,e.hasOrb&&e.orbHideText?null:z.a.createElement("div",{className:Object(w.cx)(Object(w.css)(s||(s=o(["\n                      font-size: ","px;\n                      line-heigh: normal;\n                    "],["\n                      font-size: ","px;\n                      line-heigh: normal;\n                    "])),e.fontSize))},e.hasOrb&&"Left"===e.orbLocation?z.a.createElement("span",{className:Object(w.cx)(g(e)?p.blink:"",p.orbDefaults,p.alignVertically,Object(w.css)(u||(u=o(["\n                          height: ","px;\n                          width: ","px;\n                          background-color: ",";\n                        "],["\n                          height: ","px;\n                          width: ","px;\n                          background-color: ",";\n                        "])),e.orbSize,e.orbSize,x(e))),title:v(e)}):null,e.prefix?z.a.createElement("span",{className:Object(w.cx)(p.alignVertically,p.boxPrefix,Object(w.css)(b||(b=o(["\n                          font-size: ","px;\n                        "],["\n                          font-size: ","px;\n                        "])),e.prefixSize)),title:v(e)},e.prefix):null,z.a.createElement("span",{className:Object(w.cx)(g(e)?p.blink:"",p.alignVertically)},E(e)),e.suffix?z.a.createElement("span",{className:Object(w.cx)(p.alignVertically,p.boxSuffix,Object(w.css)(f||(f=o(["\n                          font-size: ","px;\n                        "],["\n                          font-size: ","px;\n                        "])),e.suffixSize)),title:v(e)},e.suffix):null,e.hasOrb&&"Right"===e.orbLocation?z.a.createElement("span",{className:Object(w.cx)(g(e)?p.blink:"",p.orbDefaults,p.alignVertically,Object(w.css)(d||(d=o(["\n                          height: ","px;\n                          width: ","px;\n                          background-color: ",";\n                        "],["\n                          height: ","px;\n                          width: ","px;\n                          background-color: ",";\n                        "])),e.orbSize,e.orbSize,x(e))),title:v(e)}):null),e.hasOrb&&!e.orbHideText&&"Bottom"===e.orbLocation?z.a.createElement("span",{className:Object(w.cx)(g(e)?p.blink:"",p.orbDefaults,Object(w.css)(h||(h=o(["\n                      height: ","px;\n                      width: ","px;\n                      background-color: ",";\n                    "],["\n                      height: ","px;\n                      width: ","px;\n                      background-color: ",";\n                    "])),e.orbSize,e.orbSize,x(e))),title:v(e)}):null))}))));function g(e){if(e.isUsingThresholds&&e.thresholds&&(e.blinkHigh||e.blinkLow)){var n=E(e),t=+e.thresholds.split(",")[0],a=+e.thresholds.split(",")[1];if(e.blinkHigh&&+n>=a)return!0;if(e.blinkLow&&+n<=t)return!0}return!1}function x(e){var n=E(e);if(e.isUsingThresholds&&e.thresholds){var t=+e.thresholds.split(",")[0];return+n>=+e.thresholds.split(",")[1]?e.colorHigh:+n<=t?e.colorLow:e.colorMedium}return e.color}function v(e){var n,t;return null!=(t=null!=(n=e.prefix)?n:"".concat(y(e.serie,5)))?t:"".concat(e.suffix)}function E(e){return y(e.serie,e.decimal)}function y(e,n){var a,o,r,l,i="N/A",c=null===(a=t.series.find((function(n){return n.name===e})))||void 0===a?void 0:a.fields.find((function(e){return"number"===e.type})),s=null===(o=c)||void 0===o?void 0:o.values.length;if(s){for(;s--&&null==(null===(r=c)||void 0===r?void 0:r.values.get(s)););-1!==s&&(i=null===(l=c)||void 0===l?void 0:l.values.get(s).toFixed(n).toString())}return i}})).setPanelOptions((function(e){e.addTextInput({name:"Background URL",path:"bgURL"}).addCustomEditor({path:"boxes",name:"Boxes definitions",id:"boxesDefinitions",defaultValue:null,editor:function(e){var n=e.context,t=n.data,a=n.options;null==a.boxes&&(a.boxes=[]);var o=[{label:"Top",value:"Top"},{label:"Bottom",value:"Bottom"},{label:"Left",value:"Left"},{label:"Right",value:"Right"}],r=t.map((function(e){return{value:e.name,label:e.name}}));return z.a.createElement("div",{className:"section gf-form-group"},z.a.createElement("h4",{className:"section-heading"},"Boxes definitions"),a.boxes.map((function(n,t){return z.a.createElement("div",null,z.a.createElement("h5",null,"Box #",t),z.a.createElement("div",{className:"section gf-form-group"},z.a.createElement(S.HorizontalGroup,null,z.a.createElement(S.IconButton,{name:"trash-alt",size:"xl",surface:"panel",onClick:function(n){return function(n,t){n.target;delete a.boxes[t],a.boxes.splice(t,1),e.onChange(a.boxes)}(n,t)}}),z.a.createElement(S.IconButton,{name:"copy",size:"xl",surface:"panel",onClick:function(t){return function(n,t){n.target;a.boxes.push(Object.create(t)),e.onChange(a.boxes)}(t,n)}}))),z.a.createElement("div",{className:"section gf-form-group"},z.a.createElement("h5",{className:"section-heading"},"Metric"),z.a.createElement(S.HorizontalGroup,null,z.a.createElement(S.Field,{label:"Name"},z.a.createElement(S.Input,{type:"text",readOnly:!0,value:n.serie,width:16})),z.a.createElement(S.ValuePicker,{label:"Change Metric",icon:"exchange-alt",options:r,onChange:function(t){return o=t.value,n.serie=o,void e.onChange(a.boxes);var o},variant:"secondary",size:"sm"}),z.a.createElement(S.Field,{label:"Prefix"},z.a.createElement(S.Input,{type:"text",onChange:function(t){return o=n,r=t.target,o.prefix=r.value,void e.onChange(a.boxes);var o,r},value:n.prefix})),z.a.createElement(S.Field,{label:"Suffix"},z.a.createElement(S.Input,{type:"text",onChange:function(t){return o=n,r=t.target,o.suffix=r.value,void e.onChange(a.boxes);var o,r},value:n.suffix}))),z.a.createElement(S.HorizontalGroup,null,n.prefix?z.a.createElement(z.a.Fragment,null,z.a.createElement(S.Field,{label:"Prefix size"},z.a.createElement(S.Input,{type:"text",onChange:function(t){return o=n,r=t.target,o.prefixSize=r.value,void e.onChange(a.boxes);var o,r},value:n.prefixSize}))):null,n.suffix?z.a.createElement(z.a.Fragment,null,z.a.createElement(S.Field,{label:"Suffix size"},z.a.createElement(S.Input,{type:"text",onChange:function(t){return o=n,r=t.target,o.suffixSize=r.value,void e.onChange(a.boxes);var o,r},value:n.suffixSize}))):null)),z.a.createElement("div",{className:"section gf-form-group"},z.a.createElement("h5",{className:"section-heading"},"Position and Link"),z.a.createElement(S.Tooltip,{theme:"info",content:z.a.createElement("p",null,"You can easily find the coordinates if you ",z.a.createElement("code",null,"ctrl"),"+",z.a.createElement("code",null,"left click"),"anywhere on your image")},z.a.createElement(S.Icon,{name:"info-circle"})),z.a.createElement(S.HorizontalGroup,null,z.a.createElement(S.Field,{label:"X"},z.a.createElement(S.Input,{type:"text",onChange:function(t){return o=n,r=t.target,o.xpos=r.value,void e.onChange(a.boxes);var o,r},value:n.xpos})),z.a.createElement(S.Field,{label:"Y"},z.a.createElement(S.Input,{type:"text",onChange:function(t){return o=n,r=t.target,o.ypos=r.value,void e.onChange(a.boxes);var o,r},value:n.ypos}))),z.a.createElement(S.HorizontalGroup,null,z.a.createElement(S.Field,{label:"Angle"},z.a.createElement(S.Input,{type:"text",onChange:function(t){return o=n,r=t.target,o.angle=r.value,void e.onChange(a.boxes);var o,r},value:n.angle})),z.a.createElement(S.Field,{label:"Link"},z.a.createElement(S.Input,{type:"text",onChange:function(t){return o=n,r=t.target,o.url=r.value,void e.onChange(a.boxes);var o,r},value:n.url})))),z.a.createElement("div",{className:"section gf-form-group"},z.a.createElement("h5",{className:"section-heading"},"Appearance"),z.a.createElement(S.HorizontalGroup,null,z.a.createElement(S.Field,{label:"Decimal"},z.a.createElement(S.Input,{type:"text",onChange:function(t){return o=n,r=t.target,o.decimal=r.value,void e.onChange(a.boxes);var o,r},value:n.decimal})),z.a.createElement(S.Field,{label:"Font-size"},z.a.createElement(S.Input,{type:"text",onChange:function(t){return o=n,r=t.target,o.fontSize=r.value,void e.onChange(a.boxes);var o,r},value:n.fontSize}))),z.a.createElement(S.HorizontalGroup,null,z.a.createElement("div",{className:"width-5"},z.a.createElement(S.Field,{label:"Show Orb"},z.a.createElement(S.Switch,{value:n.hasOrb,checked:n.hasOrb,onChange:function(t){return o=n,r=t.target,o.hasOrb=r.checked,void e.onChange(a.boxes);var o,r}}))),n.hasOrb?z.a.createElement(z.a.Fragment,null,z.a.createElement("div",{className:"width-6"},z.a.createElement(S.Field,{label:"Hide text"},z.a.createElement(S.Switch,{checked:n.orbHideText,onChange:function(t){return o=n,r=t.target,o.orbHideText=r.checked,void e.onChange(a.boxes);var o,r}}))),n.orbHideText?null:z.a.createElement(z.a.Fragment,null,z.a.createElement("div",{className:"width-12"},z.a.createElement(S.Field,{label:"Orb Location"},z.a.createElement(S.Select,{options:o,onChange:function(t){return o=t,n.orbLocation=o.value,void e.onChange(a.boxes);var o},value:n.orbLocation})))),z.a.createElement("div",null,z.a.createElement(S.Field,{label:"Orb Size"},z.a.createElement(S.Input,{type:"text",value:n.orbSize,onChange:function(t){return o=n,r=t.target,o.orbSize=r.value,void e.onChange(a.boxes);var o,r}})))):null),z.a.createElement(S.HorizontalGroup,null,z.a.createElement(S.Field,{label:"Use Thresholds"},z.a.createElement(S.Switch,{onChange:function(t){return o=n,r=t.target,o.isUsingThresholds=r.checked,void e.onChange(a.boxes);var o,r},value:n.isUsingThresholds})),n.isUsingThresholds?z.a.createElement(z.a.Fragment,null,z.a.createElement(S.Tooltip,{content:z.a.createElement("p",null,"Enter 2 comma-separated numbers. 20,60 will produce: ",z.a.createElement("code",null,"value <= 20")," -> green ",z.a.createElement("br",null),z.a.createElement("code",null,"value between 20 and 60")," -> yellow ",z.a.createElement("br",null),z.a.createElement("code",null,"value >= 60")," -> red"," ")},z.a.createElement(S.Icon,{name:"info-circle"})),z.a.createElement(S.Field,{label:"Thresholds"},z.a.createElement(S.Input,{type:"text",onChange:function(t){return o=n,r=t.target,o.thresholds=r.value,void e.onChange(a.boxes);var o,r},value:n.thresholds})),z.a.createElement(S.HorizontalGroup,null,z.a.createElement(S.ColorPicker,{color:n.colorLow,onChange:function(t){return function(n,t){t.colorLow=n,e.onChange(a.boxes)}(t,n)}}),z.a.createElement(S.ColorPicker,{color:n.colorMedium,onChange:function(t){return function(n,t){t.colorMedium=n,e.onChange(a.boxes)}(t,n)}}),z.a.createElement(S.ColorPicker,{color:n.colorHigh,onChange:function(t){return function(n,t){t.colorHigh=n,e.onChange(a.boxes)}(t,n)}}))):z.a.createElement(S.Field,{label:"Color"},z.a.createElement(S.ColorPicker,{color:n.color,onChange:function(t){return function(n,t){t.color=n,e.onChange(a.boxes)}(t,n)}}))),n.isUsingThresholds?z.a.createElement(S.HorizontalGroup,null,z.a.createElement(S.Field,{label:"Blink if low"},z.a.createElement(S.Switch,{onChange:function(t){return o=n,r=t.target,o.blinkLow=r.checked,void e.onChange(a.boxes);var o,r},value:n.blinkLow})),z.a.createElement(S.Field,{label:"Blink if high"},z.a.createElement(S.Switch,{onChange:function(t){return o=n,r=t.target,o.blinkHigh=r.checked,void e.onChange(a.boxes);var o,r},value:n.blinkHigh}))):null),z.a.createElement("hr",null))})),z.a.createElement(S.Button,{variant:"primary",size:"md",icon:"plus",onClick:function(n){n.target;null==a.boxes&&(a.boxes=[]),a.boxes.push({angle:0,color:"#fff",colorHigh:"#f00",colorLow:"#0f0",colorMedium:"#fa1",decimal:0,fontSize:12,hasOrb:!1,orbHideText:!1,orbLocation:"Left",orbSize:10,prefixSize:10,serie:"A-Serie",suffixSize:10,text:"N/A",suffix:"",prefix:"",thresholds:"",blinkHigh:!0,blinkLow:!1,isUsingThresholds:!1,xpos:0,ypos:0,url:""}),e.onChange(a.boxes)}},"Add a box"))}})})).setMigrationHandler((function(e){if(null!=e.boxes){console.log("Migrating from an older version",e);var n=new T;return n.bgURL=e.bgURL,n.boxes=[],e.boxes.forEach((function(e){console.log("Found a box to upgrade:",e),n.boxes.push({angle:e.angle,color:e.color,colorHigh:e.colorHigh,colorLow:e.colorLow,colorMedium:e.colorMedium,decimal:e.decimal,fontSize:e.fontsize,hasOrb:e.hasOrb,orbHideText:e.orbHideText,orbLocation:e.orbLocation,orbSize:e.orbSize,prefixSize:e.prefixSize,serie:e.serie,suffixSize:e.suffixSize,text:e.text,suffix:e.suffix,prefix:e.prefix,thresholds:e.thresholds,blinkHigh:e.blinkHigh,blinkLow:e.blinkLow,isUsingThresholds:e.usingThresholds,xpos:e.xpos,ypos:e.ypos,url:e.URL})})),n}return console.log("MigHandler: Nothing to upgrade"),e.options}))}])}));
//# sourceMappingURL=module.js.map