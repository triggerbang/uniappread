(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-comment"],{"40cc":function(t,e,a){var c=a("a790");"string"===typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);var n=a("4f06").default;n("b3133ed0",c,!0,{sourceMap:!1,shadowMode:!1})},"5f18":function(t,e,a){"use strict";a.r(e);var c=a("cf9f"),n=a.n(c);for(var o in c)"default"!==o&&function(t){a.d(e,t,(function(){return c[t]}))}(o);e["default"]=n.a},9798:function(t,e,a){"use strict";var c;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return c}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",t._l(0!==t.comments.length?t.comments:t.defaultComments,(function(e,c){return a("v-uni-view",{key:c,staticClass:"comment"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-image",{attrs:{src:e.user.avatar_url,mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.user.name))])],1),a("v-uni-view",{staticClass:"content"},[t._v(t._s(e.content))]),a("v-uni-view",{staticClass:"bottom"},[t._v(t._s(e.created_at))])],1)],1)})),1)},o=[]},a790:function(t,e,a){var c=a("24fb");e=c(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.comment[data-v-ca7c218e]{display:flex;padding:%?30?%}.comment .left uni-image[data-v-ca7c218e]{width:%?64?%;height:%?64?%;border-radius:50%;background-color:#f2f2f2}.comment .right[data-v-ca7c218e]{flex:1;padding-left:%?20?%;font-size:%?30?%}.comment .right .top[data-v-ca7c218e]{display:flex;justify-content:space-between;align-items:center;margin-bottom:%?10?%}.comment .right .top .name[data-v-ca7c218e]{color:#5677fc}.comment .right .top .like[data-v-ca7c218e]{display:flex;align-items:center;color:#9a9a9a;font-size:%?26?%}.comment .right .top .like .num[data-v-ca7c218e]{margin-right:%?4?%;color:#9a9a9a}.comment .right .top .highlight[data-v-ca7c218e]{color:#5677fc}.comment .right .top .highlight .num[data-v-ca7c218e]{color:#5677fc}.comment .right .content[data-v-ca7c218e]{margin-bottom:%?10?%}.comment .right .reply-box[data-v-ca7c218e]{background-color:#f2f2f2;border-radius:%?12?%}.comment .right .reply-box .item[data-v-ca7c218e]{padding:%?20?%;border-bottom:solid %?2?% #e4e7ed}.comment .right .reply-box .item .username[data-v-ca7c218e]{font-size:%?24?%;color:#999}.comment .right .reply-box .all-reply[data-v-ca7c218e]{padding:%?20?%;display:flex;color:#5677fc;align-items:center}.comment .right .reply-box .all-reply .more[data-v-ca7c218e]{margin-left:%?6?%}.comment .right .bottom[data-v-ca7c218e]{margin-top:%?20?%;display:flex;font-size:%?24?%;color:#9a9a9a}.comment .right .bottom .reply[data-v-ca7c218e]{color:#5677fc;margin-left:%?10?%}',""]),t.exports=e},b051:function(t,e,a){"use strict";var c=a("40cc"),n=a.n(c);n.a},b392:function(t,e,a){"use strict";a.r(e);var c=a("9798"),n=a("5f18");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("b051");var i,r=a("f0c5"),s=Object(r["a"])(n["default"],c["b"],c["c"],!1,null,"ca7c218e",null,!1,c["a"],i);e["default"]=s.exports},cf9f:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c={name:"Comments",props:{comments:{type:Array,default:function(){return[]}}},data:function(){return{defaultComments:[{id:1,created_at:"12-25 18:58",content:"很不错的一本书，带给我很多收获，好评！",user:{name:"叶轻眉",avatar_url:"https://cdn.uviewui.com/uview/template/SmilingDog.jpg"}}]}}};e.default=c}}]);