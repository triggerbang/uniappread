(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-detail~pages-index-index"],{"019b":function(t,e,a){"use strict";a.r(e);var i=a("4278"),n=a("1f17");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("fbfd");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"345affc4",null,!1,i["a"],o);e["default"]=s.exports},"047d":function(t,e,a){"use strict";a.r(e);var i=a("6da0"),n=a("8369");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("560e");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"0a5981a4",null,!1,i["a"],o);e["default"]=s.exports},"048f":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-badge[data-v-4d072e0b]{display:inline-flex;justify-content:center;align-items:center;line-height:%?24?%;padding:%?4?% %?8?%;border-radius:%?100?%;z-index:9}.u-badge--bg--primary[data-v-4d072e0b]{background-color:#2979ff}.u-badge--bg--error[data-v-4d072e0b]{background-color:#fa3534}.u-badge--bg--success[data-v-4d072e0b]{background-color:#19be6b}.u-badge--bg--info[data-v-4d072e0b]{background-color:#909399}.u-badge--bg--warning[data-v-4d072e0b]{background-color:#f90}.u-badge-dot[data-v-4d072e0b]{height:%?16?%;width:%?16?%;border-radius:%?100?%;line-height:1}.u-badge-mini[data-v-4d072e0b]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.u-info[data-v-4d072e0b]{background-color:#909399;color:#fff}',""]),t.exports=e},"064b":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uBadge:a("1eb6").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-tabs",style:{background:t.bgColor}},[a("v-uni-view",{attrs:{id:t.id}},[a("v-uni-scroll-view",{staticClass:"u-scroll-view",attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[a("v-uni-view",{staticClass:"u-scroll-box",class:{"u-tabs-scorll-flex":!t.isScroll}},[t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"u-tab-item u-line-1",style:[t.tabItemStyle(i)],attrs:{id:"u-tab-item-"+i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTab(i)}}},[a("u-badge",{attrs:{count:e[t.count]||e["count"]||0,offset:t.offset,size:"mini"}}),t._v(t._s(e[t.name]||e["name"]))],1)})),t.showBar?a("v-uni-view",{staticClass:"u-tab-bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)],1)},r=[]},"09b9":function(t,e,a){"use strict";a.r(e);var i=a("2f1b"),n=a("76f1");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("b108");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"885009e8",null,!1,i["a"],o);e["default"]=s.exports},"1eb6":function(t,e,a){"use strict";a.r(e);var i=a("dec7"),n=a("93f2");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("d7da");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"4d072e0b",null,!1,i["a"],o);e["default"]=s.exports},"1f17":function(t,e,a){"use strict";a.r(e);var i=a("7afe"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"2a33":function(t,e,a){var i=a("ca80");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("758183d2",i,!0,{sourceMap:!1,shadowMode:!1})},"2f1b":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uIcon:a("4053").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():a("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?a("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):a("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?a("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):a("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},r=[]},"325e":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=i},"3ef0":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uImage:a("09b9").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-navigator",{staticClass:"goods-item",attrs:{url:"/pages/goods/detail?id="+t.book.id}},[a("u-image",{staticClass:"u-skeleton-fillet",attrs:{width:"100%",height:"300rpx",src:t.book.cover_url}}),a("v-uni-view",{staticClass:"title u-line-1 u-skeleton-rect"},[t._v(t._s(t.book.title?t.book.title:"Loading"))]),a("v-uni-view",{staticClass:"u-flex u-row-between"},[a("v-uni-view",{staticClass:"price u-skeleton-rect"},[t._v("¥"+t._s(t.book.price))]),a("v-uni-view",{staticClass:"sales u-skeleton-rect"},[t._v("销量"+t._s(t.book.sales))])],1)],1)},r=[]},4226:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-col",props:{span:{type:[Number,String],default:12},offset:{type:[Number,String],default:0},justify:{type:String,default:"start"},align:{type:String,default:"center"},textAlign:{type:String,default:"left"},stop:{type:Boolean,default:!0}},data:function(){return{gutter:20}},created:function(){this.parent=!1},mounted:function(){this.parent=this.$u.$parent.call(this,"u-row"),this.parent&&(this.gutter=this.parent.gutter)},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(t){this.$emit("click")}}};e.default=i},4278:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-row",style:{alignItems:t.uAlignItem,justifyContent:t.uJustify},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},"560e":function(t,e,a){"use strict";var i=a("e188"),n=a.n(i);n.a},5687:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.goods-item[data-v-5388dbb6]{padding:%?40?%;margin-top:%?30?%;box-shadow:0 %?12?% %?20?% 0 rgba(0,0,0,.1)}.goods-item .title[data-v-5388dbb6]{margin:%?10?% 0;font-weight:500;font-size:%?32?%;width:100%}.goods-item .price[data-v-5388dbb6]{color:red;width:40%}.goods-item .sales[data-v-5388dbb6]{color:#82848a;width:40%}',""]),t.exports=e},6962:function(t,e,a){var i=a("048f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("bb1b69ce",i,!0,{sourceMap:!1,shadowMode:!1})},"6da0":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-col",class:["u-col-"+t.span],style:{padding:"0 "+Number(t.gutter)/2+"rpx",marginLeft:100/12*t.offset+"%",flex:"0 0 "+100/12*t.span+"%",alignItems:t.uAlignItem,justifyContent:t.uJustify,textAlign:t.textAlign},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},"76f1":function(t,e,a){"use strict";a.r(e);var i=a("325e"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"7afe":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-row",props:{gutter:{type:[String,Number],default:20},justify:{type:String,default:"start"},align:{type:String,default:"center"},stop:{type:Boolean,default:!0}},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(t){this.$emit("click")}}};e.default=i},8369:function(t,e,a){"use strict";a.r(e);var i=a("4226"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"8fed":function(t,e,a){var i=a("5687");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("44c4b603",i,!0,{sourceMap:!1,shadowMode:!1})},9390:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-image[data-v-885009e8]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-885009e8]{width:100%;height:100%}.u-image__loading[data-v-885009e8], .u-image__error[data-v-885009e8]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},"93f2":function(t,e,a){"use strict";a.r(e);var i=a("f269"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"9b51":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"goods-card",props:{book:{type:Object,default:function(){return{}}}},data:function(){return{}}};e.default=i},"9daa":function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),r={name:"u-tabs",props:{isScroll:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},height:{type:[String,Number],default:80},fontSize:{type:[String,Number],default:30},duration:{type:[String,Number],default:.5},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[String,Number],default:40},barHeight:{type:[String,Number],default:6},gutter:{type:[String,Number],default:30},bgColor:{type:String,default:"#ffffff"},name:{type:String,default:"name"},count:{type:String,default:"count"},offset:{type:Array,default:function(){return[5,20]}},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}},itemWidth:{type:[Number,String],default:"auto"}},data:function(){return{scrollLeft:0,tabQueryInfo:[],componentWidth:0,scrollBarLeft:0,parentLeft:0,id:this.$u.guid(),currentIndex:this.current,barFirstTimeMove:!0}},watch:{list:function(t,e){var a=this;t.length!==e.length&&(this.currentIndex=0),this.$nextTick((function(){a.init()}))},current:{immediate:!0,handler:function(t,e){var a=this;this.$nextTick((function(){a.currentIndex=t,a.scrollByIndex()}))}}},computed:{tabBarStyle:function(){var t={width:this.barWidth+"rpx",transform:"translate(".concat(this.scrollBarLeft,"px, -100%)"),"transition-duration":"".concat(this.barFirstTimeMove?0:this.duration,"s"),"background-color":this.activeColor,height:this.barHeight+"rpx","border-radius":"".concat(this.barHeight/2,"px")};return Object.assign(t,this.barStyle),t},tabItemStyle:function(){var t=this;return function(e){var a={height:t.height+"rpx","line-height":t.height+"rpx","font-size":t.fontSize+"rpx","transition-duration":"".concat(t.duration,"s"),padding:t.isScroll?"0 ".concat(t.gutter,"rpx"):"",flex:t.isScroll?"auto":"1",width:t.$u.addUnit(t.itemWidth)};return e==t.currentIndex&&t.bold&&(a.fontWeight="bold"),e==t.currentIndex?(a.color=t.activeColor,a=Object.assign(a,t.activeItemStyle)):a.color=t.inactiveColor,a}}},methods:{init:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$uGetRect("#"+t.id);case 2:a=e.sent,t.parentLeft=a.left,t.componentWidth=a.width,t.getTabRect();case 6:case"end":return e.stop()}}),e)})))()},clickTab:function(t){t!=this.currentIndex&&this.$emit("change",t)},getTabRect:function(){for(var t=uni.createSelectorQuery().in(this),e=0;e<this.list.length;e++)t.select("#u-tab-item-".concat(e)).fields({size:!0,rect:!0});t.exec(function(t){this.tabQueryInfo=t,this.scrollByIndex()}.bind(this))},scrollByIndex:function(){var t=this,e=this.tabQueryInfo[this.currentIndex];if(e){var a=e.width,i=e.left-this.parentLeft,n=i-(this.componentWidth-a)/2;this.scrollLeft=n<0?0:n;var r=e.left+e.width/2-this.parentLeft;this.scrollBarLeft=r-uni.upx2px(this.barWidth)/2,1==this.barFirstTimeMove&&setTimeout((function(){t.barFirstTimeMove=!1}),100)}}},mounted:function(){this.init()}};e.default=r},ac62:function(t,e,a){"use strict";a.r(e);var i=a("9b51"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},b0ba:function(t,e,a){"use strict";var i=a("8fed"),n=a.n(i);n.a},b108:function(t,e,a){"use strict";var i=a("b94a"),n=a.n(i);n.a},b94a:function(t,e,a){var i=a("9390");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6da6e866",i,!0,{sourceMap:!1,shadowMode:!1})},c33e:function(t,e,a){"use strict";var i=a("2a33"),n=a.n(i);n.a},c82a:function(t,e,a){"use strict";a.r(e);var i=a("9daa"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},c9be:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-row[data-v-345affc4]{display:flex;flex-direction:row;flex-wrap:wrap}',""]),t.exports=e},ca80:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-view[data-v-bec4b458],\r\nuni-scroll-view[data-v-bec4b458]{box-sizing:border-box}[data-v-bec4b458]::-webkit-scrollbar,[data-v-bec4b458]::-webkit-scrollbar,[data-v-bec4b458]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-box[data-v-bec4b458]{position:relative}uni-scroll-view[data-v-bec4b458]  ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-view[data-v-bec4b458]{width:100%;white-space:nowrap;position:relative}.u-tab-item[data-v-bec4b458]{position:relative;display:inline-block;text-align:center;transition-property:background-color,color}.u-tab-bar[data-v-bec4b458]{position:absolute;bottom:0}.u-tabs-scorll-flex[data-v-bec4b458]{display:flex;flex-direction:row;justify-content:space-between}',""]),t.exports=e},d750:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-col-0[data-v-0a5981a4]{width:0}.u-col-1[data-v-0a5981a4]{width:calc(100%/12)}.u-col-2[data-v-0a5981a4]{width:calc(100%/12 * 2)}.u-col-3[data-v-0a5981a4]{width:calc(100%/12 * 3)}.u-col-4[data-v-0a5981a4]{width:calc(100%/12 * 4)}.u-col-5[data-v-0a5981a4]{width:calc(100%/12 * 5)}.u-col-6[data-v-0a5981a4]{width:calc(100%/12 * 6)}.u-col-7[data-v-0a5981a4]{width:calc(100%/12 * 7)}.u-col-8[data-v-0a5981a4]{width:calc(100%/12 * 8)}.u-col-9[data-v-0a5981a4]{width:calc(100%/12 * 9)}.u-col-10[data-v-0a5981a4]{width:calc(100%/12 * 10)}.u-col-11[data-v-0a5981a4]{width:calc(100%/12 * 11)}.u-col-12[data-v-0a5981a4]{width:calc(100%/12 * 12)}',""]),t.exports=e},d7da:function(t,e,a){"use strict";var i=a("6962"),n=a.n(i);n.a},daee:function(t,e,a){"use strict";a.r(e);var i=a("3ef0"),n=a("ac62");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("b0ba");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"5388dbb6",null,!1,i["a"],o);e["default"]=s.exports},dec7:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("v-uni-view",{staticClass:"u-badge",class:[t.isDot?"u-badge-dot":"","mini"==t.size?"u-badge-mini":"",t.type?"u-badge--bg--"+t.type:""],style:[{top:t.offset[0]+"rpx",right:t.offset[1]+"rpx",fontSize:t.fontSize+"rpx",position:t.absolute?"absolute":"static",color:t.color,backgroundColor:t.bgColor},t.boxStyle]},[t._v(t._s(t.showText))]):t._e()},r=[]},e188:function(t,e,a){var i=a("d750");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("19a1a4eb",i,!0,{sourceMap:!1,shadowMode:!1})},e70e:function(t,e,a){var i=a("c9be");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0a04e188",i,!0,{sourceMap:!1,shadowMode:!1})},f269:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-badge",props:{type:{type:String,default:"error"},size:{type:String,default:"default"},isDot:{type:Boolean,default:!1},count:{type:[Number,String]},overflowCount:{type:Number,default:99},showZero:{type:Boolean,default:!1},offset:{type:Array,default:function(){return[20,20]}},absolute:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:"24"},color:{type:String,default:"#ffffff"},bgColor:{type:String,default:""},isCenter:{type:Boolean,default:!1}},computed:{boxStyle:function(){var t={};return this.isCenter?(t.top=0,t.right=0,t.transform="translateY(-50%) translateX(50%)"):(t.top=this.offset[0]+"rpx",t.right=this.offset[1]+"rpx",t.transform="translateY(0) translateX(0)"),"mini"==this.size&&(t.transform=t.transform+" scale(0.8)"),t},showText:function(){return this.isDot?"":this.count>this.overflowCount?"".concat(this.overflowCount,"+"):this.count},show:function(){return 0!=this.count||0!=this.showZero}}};e.default=i},f654:function(t,e,a){"use strict";a.r(e);var i=a("064b"),n=a("c82a");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("c33e");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"bec4b458",null,!1,i["a"],o);e["default"]=s.exports},fbfd:function(t,e,a){"use strict";var i=a("e70e"),n=a.n(i);n.a}}]);