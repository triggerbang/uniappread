(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods"],{"1bf1":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(t){this.$emit("input",t),this.$emit("change",t)},value:{immediate:!0,handler:function(t){this.keyword=t}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(t){this.keyword=t.detail.value},clear:function(){var t=this;this.keyword="",this.$nextTick((function(){t.$emit("clear")}))},search:function(t){this.$emit("search",t.detail.value);try{uni.hideKeyboard()}catch(t){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(t){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var t=this;setTimeout((function(){t.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};e.default=n},"1e07":function(t,e,a){"use strict";a.r(e);var n=a("1bf1"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},2909:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var n=c(a("6005")),i=c(a("db90")),r=c(a("06c5")),o=c(a("3427"));function c(t){return t&&t.__esModule?t:{default:t}}function u(t){return(0,n.default)(t)||(0,i.default)(t)||(0,r.default)(t)||(0,o.default)()}},"2a36":function(t,e,a){var n=a("be76");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("bbcf4c4a",n,!0,{sourceMap:!1,shadowMode:!1})},3427:function(t,e,a){"use strict";function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"3bba":function(t,e,a){"use strict";var n=a("4ea4");a("99af"),a("fb6a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("2909"));a("96cf");var r=n(a("1da1")),o={data:function(){return{scrollTop:0,currentId:null,categories:[],goodsList:[],keyword:"",page:1,isLastPage:!1}},onLoad:function(){this.getCateAndProData()},methods:{getCateAndProData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={page:t.page,title:t.keyword,category_id:t.currentId},e.next=3,t.$u.api.getGoodsCategory(a);case 3:n=e.sent,t.categories=n.categories.slice(0,5),t.goodsList=[].concat((0,i.default)(t.goodsList),(0,i.default)(n.goods.data)),t.isLastPage=!n.goods.next_page_url;case 7:case"end":return e.stop()}}),e)})))()},swichMenu:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t!=e.currentId){a.next=2;break}return a.abrupt("return");case 2:e.currentId=t,e.clearSearchCache(),e.getCateAndProData();case 5:case"end":return a.stop()}}),a)})))()},searchProduct:function(){this.clearSearchCache(),this.getCateAndProData()},clearSearch:function(){this.clearSearchCache(),this.getCateAndProData()},scrollToBottom:function(){this.isLastPage||(this.page+=1,this.getCateAndProData())},clearSearchCache:function(){this.page=1,this.goodsList=[]}}};e.default=o},"3d4d":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-empty[data-v-27d61a1e]{display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center;height:100%}.u-image[data-v-27d61a1e]{margin-bottom:%?20?%}.u-slot-wrap[data-v-27d61a1e]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}',""]),t.exports=e},5052:function(t,e,a){"use strict";a.r(e);var n=a("9599"),i=a("e2c7");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("802a");var o,c=a("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"a4c34b1a",null,!1,n["a"],o);e["default"]=u.exports},"554d":function(t,e,a){"use strict";a.r(e);var n=a("5929"),i=a("fcf0");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("d2a2");var o,c=a("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"27d61a1e",null,!1,n["a"],o);e["default"]=u.exports},"576f":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};e.default=n},5929:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uIcon:a("4053").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("v-uni-view",{staticClass:"u-empty",style:{marginTop:t.marginTop+"rpx"}},[a("u-icon",{attrs:{name:t.src?t.src:"empty-"+t.mode,"custom-style":t.iconStyle,label:t.text?t.text:t.icons[t.mode],"label-pos":"bottom","label-color":t.color,"label-size":t.fontSize,size:t.iconSize,color:t.iconColor,"margin-top":"14"}}),a("v-uni-view",{staticClass:"u-slot-wrap"},[t._t("bottom")],2)],1):t._e()},r=[]},6005:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=i(a("6b75"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t))return(0,n.default)(t)}},"6e51":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uIcon:a("4053").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-search",style:{margin:t.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"u-content",style:{backgroundColor:t.bgColor,borderRadius:"round"==t.shape?"100rpx":"10rpx",border:t.borderStyle,height:t.height+"rpx"}},[a("v-uni-view",{staticClass:"u-icon-wrap"},[a("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:t.searchIcon,color:t.searchIconColor?t.searchIconColor:t.color}})],1),a("v-uni-input",{staticClass:"u-input",style:[{textAlign:t.inputAlign,color:t.color,backgroundColor:t.bgColor},t.inputStyle],attrs:{"confirm-type":"search",value:t.value,disabled:t.disabled,focus:t.focus,maxlength:t.maxlength,"placeholder-class":"u-placeholder-class",placeholder:t.placeholder,"placeholder-style":"color: "+t.placeholderColor,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getFocus.apply(void 0,arguments)}}}),t.keyword&&t.clearabled&&t.focused?a("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[a("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):t._e()],1),a("v-uni-view",{staticClass:"u-action",class:[t.showActionBtn||t.show?"u-action-active":""],style:[t.actionStyle],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v(t._s(t.actionText))])],1)},r=[]},"802a":function(t,e,a){"use strict";var n=a("2a36"),i=a.n(n);i.a},8394:function(t,e,a){var n=a("3d4d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("1463c818",n,!0,{sourceMap:!1,shadowMode:!1})},9599:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uSearch:a("e98e").default,uEmpty:a("554d").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-wrap"},[a("v-uni-view",{staticClass:"u-search-box"},[a("u-search",{attrs:{placeholder:"搜索商品",shape:"square"},on:{custom:function(e){arguments[0]=e=t.$handleEvent(e),t.searchProduct.apply(void 0,arguments)},clear:function(e){arguments[0]=e=t.$handleEvent(e),t.clearSearch.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),a("v-uni-view",{staticClass:"u-menu-wrap"},[a("v-uni-scroll-view",{staticClass:"u-tab-view menu-scroll-view",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":t.scrollTop}},t._l(t.categories,(function(e,n){return a("v-uni-view",{key:n},t._l(e.children.slice(0,3),(function(e,n){return a("v-uni-view",{key:n,staticClass:"u-tab-item",class:t.currentId==e.id?"u-tab-item-active":"",attrs:{"data-current":n},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.swichMenu(e.id)}}},[a("v-uni-text",{staticClass:"u-line-1"},[t._v(t._s(e.name))])],1)})),1)})),1),[a("v-uni-scroll-view",{staticClass:"right-box",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.scrollToBottom.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"page-view"},[a("v-uni-view",{staticClass:"class-item"},[a("v-uni-view",{staticClass:"item-container"},[t._l(t.goodsList,(function(e,n){return a("v-uni-navigator",{key:n,staticClass:"thumb-box u-p-t-40 u-p-b-40",attrs:{url:"/pages/goods/detail?id="+e.id}},[a("v-uni-image",{staticClass:"item-menu-image",attrs:{src:e.cover_url,mode:""}}),a("v-uni-view",{staticClass:"item-menu-name"},[t._v(t._s(e.title))])],1)})),t.goodsList.length?t._e():a("v-uni-view",{staticClass:"u-flex-1 u-p-t-80 u-p-b-80"},[a("u-empty",{attrs:{text:"暂无数据",mode:"list"}})],1)],2)],1)],1)],1)]],2)],1)},r=[]},"9fb5":function(t,e,a){"use strict";var n=a("b361"),i=a.n(n);i.a},a9a8:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-search[data-v-13f672b9]{display:flex;flex-direction:row;align-items:center;flex:1}.u-content[data-v-13f672b9]{display:flex;flex-direction:row;align-items:center;padding:0 %?18?%;flex:1}.u-clear-icon[data-v-13f672b9]{display:flex;flex-direction:row;align-items:center}.u-input[data-v-13f672b9]{flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-13f672b9]{width:%?40?%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-13f672b9]{color:#909399}.u-action[data-v-13f672b9]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-13f672b9]{width:%?80?%;margin-left:%?10?%}',""]),t.exports=e},b361:function(t,e,a){var n=a("a9a8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("0d8c2826",n,!0,{sourceMap:!1,shadowMode:!1})},be76:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-wrap[data-v-a4c34b1a]{height:calc(100vh);height:calc(100vh - var(--window-top));display:flex;flex-direction:column}.u-search-box[data-v-a4c34b1a]{padding:%?18?% %?30?%}.u-menu-wrap[data-v-a4c34b1a]{flex:1;display:flex;overflow:hidden}.u-search-inner[data-v-a4c34b1a]{background-color:#eaeaea;border-radius:%?100?%;display:flex;align-items:center;padding:%?10?% %?16?%}.u-search-text[data-v-a4c34b1a]{font-size:%?26?%;color:#909399;margin-left:%?10?%}.u-tab-view[data-v-a4c34b1a]{width:%?200?%;height:100%}.u-tab-item[data-v-a4c34b1a]{height:%?110?%;background:#f6f6f6;box-sizing:border-box;display:flex;align-items:center;justify-content:center;font-size:%?26?%;color:#444;font-weight:400;line-height:1}.u-tab-item-active[data-v-a4c34b1a]{position:relative;color:#000;font-size:%?30?%;font-weight:600;background:#fff}.u-tab-item-active[data-v-a4c34b1a]::before{content:"";position:absolute;border-left:4px solid #2979ff;height:%?32?%;left:0;top:%?39?%}.u-tab-view[data-v-a4c34b1a]{height:100%}.right-box[data-v-a4c34b1a]{background-color:#fafafa}.page-view[data-v-a4c34b1a]{padding:%?16?%}.class-item[data-v-a4c34b1a]{margin-bottom:%?30?%;background-color:#fff;padding:%?16?%;border-radius:%?8?%}.item-title[data-v-a4c34b1a]{font-size:%?26?%;color:#303133;font-weight:700}.item-menu-name[data-v-a4c34b1a]{font-weight:400;font-size:%?24?%;color:#303133}.item-container[data-v-a4c34b1a]{display:flex;flex-wrap:wrap}.thumb-box[data-v-a4c34b1a]{width:50%;display:flex;align-items:center;justify-content:center;flex-direction:column;margin-top:%?20?%}.item-menu-image[data-v-a4c34b1a]{width:%?120?%;height:%?120?%}',""]),t.exports=e},d2a2:function(t,e,a){"use strict";var n=a("8394"),i=a.n(n);i.a},db90:function(t,e,a){"use strict";function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},e2c7:function(t,e,a){"use strict";a.r(e);var n=a("3bba"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},e98e:function(t,e,a){"use strict";a.r(e);var n=a("6e51"),i=a("1e07");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("9fb5");var o,c=a("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"13f672b9",null,!1,n["a"],o);e["default"]=u.exports},fcf0:function(t,e,a){"use strict";a.r(e);var n=a("576f"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a}}]);