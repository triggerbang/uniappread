(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cart-order"],{"02c4":function(t,e,a){"use strict";var i=a("e763"),n=a.n(i);n.a},2788:function(t,e,a){"use strict";a.r(e);var i=a("6a0b"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"527c":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uIcon:a("4053").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"addressBox"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-view",{staticClass:"address"},[t._v(t._s(t.defaultAdress?t.defaultAdress.address:"收货地址"))]),a("v-uni-view",{staticClass:"personInfo"},[a("v-uni-text",[t._v(t._s(t.defaultAdress?t.defaultAdress.name:"收货人"))]),a("v-uni-text",{staticClass:"phone"},[t._v(t._s(t.defaultAdress?t.defaultAdress.phone:"电话号码"))])],1)],1),a("v-uni-view",{staticClass:"right"},[a("u-icon",{attrs:{name:"arrow-right",color:"#999",size:"30"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleCheckAddress.apply(void 0,arguments)}}})],1)],1),t._l(t.goodsList,(function(e){return a("v-uni-view",{key:e.id,staticClass:"productBox"},[a("v-uni-view",{staticClass:"headPic"},[a("v-uni-image",{attrs:{src:e.goods.cover_url}})],1),a("v-uni-view",{staticClass:"proInfo"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-view",{staticClass:"mainTitle"},[t._v(t._s(e.goods.title))])],1),a("v-uni-view",{staticClass:"options"},[a("v-uni-text",{staticClass:"price"},[t._v("￥ "+t._s(e.goods.price))]),a("v-uni-view",{staticClass:"btns"},[t._v("× "+t._s(e.num))])],1)],1)],1)})),a("v-uni-view",{staticClass:"navigation"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-view",{staticClass:"item"},[t._v("合计(元):"),a("v-uni-text",{staticClass:"totalPrice"},[t._v("￥ "+t._s(t.totalPrice))])],1)],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"cart btn u-line-1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmitOrder.apply(void 0,arguments)}}},[t._v("提交订单")])],1)],1)],2)},r=[]},"6a0b":function(t,e,a){"use strict";var i=a("4ea4");a("4de4"),a("13d5"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),r={name:"Order",data:function(){return{goodsList:[],addressList:[],defaultAdress:{}}},created:function(){this.$u.utils.isLogin(),this.getOrderAndAdress()},methods:{getOrderAndAdress:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$u.api.handleCheckOrder();case 2:a=e.sent,i=a.address.filter((function(t){return t.is_default})),t.defaultAdress=i[0],t.goodsList=a.carts,t.addressList=a.address;case 7:case"end":return e.stop()}}),e)})))()},handleSubmitOrder:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={address_id:t.defaultAdress.id},e.next=3,t.$u.api.handleSubmitOrder(a);case 3:i=e.sent,i&&t.$u.toast("订单提交成功"),setTimeout((function(){t.$u.route({type:"navigateTo",url:"pages/cart/payment",params:{orderId:i.order_no}})}),1e3);case 6:case"end":return e.stop()}}),e)})))()},handleCheckAddress:function(){this.$u.route({type:"navigateTo",url:"pages/mine/address"})}},computed:{totalPrice:function(){return this.goodsList.reduce((function(t,e){return t+e.num*e.goods.price}),0)}}};e.default=r},a042:function(t,e,a){"use strict";a.r(e);var i=a("527c"),n=a("2788");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("02c4");var s,o=a("f0c5"),d=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"524a6c40",null,!1,i["a"],s);e["default"]=d.exports},e763:function(t,e,a){var i=a("ec67");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3f136d2a",i,!0,{sourceMap:!1,shadowMode:!1})},ec67:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.navigation[data-v-524a6c40]{display:flex;justify-content:space-between;border:solid %?2?% #f2f2f2;background-color:#fff;padding:%?16?% %?20?%;position:fixed;bottom:0;width:100%;left:0;z-index:1}.navigation .left[data-v-524a6c40]{display:flex;justify-content:space-around;align-items:center;font-size:%?20?%}.navigation .left .item[data-v-524a6c40]{font-size:%?34?%;margin:0 %?30?%}.navigation .left .item.car[data-v-524a6c40]{text-align:center;position:relative}.navigation .left .item.car .car-num[data-v-524a6c40]{position:absolute;top:%?-10?%;right:%?-10?%}.navigation .left .item .totalPrice[data-v-524a6c40]{font-size:%?40?%;font-weight:700;color:red}.navigation .right[data-v-524a6c40]{display:flex;font-size:%?28?%;align-items:center}.navigation .right .btn[data-v-524a6c40]{line-height:%?66?%;padding:0 %?30?%;border-radius:%?36?%;color:#fff}.navigation .right .cart[data-v-524a6c40]{background-color:#ed3f14;margin-right:%?30?%}.container[data-v-524a6c40]{padding:0 %?20?%}.container .addressBox[data-v-524a6c40]{display:flex;justify-content:space-between;align-items:center;height:%?120?%;margin:%?20?% 0;padding:0 %?20?%;background:#fafafa;border-radius:%?10?%;border:1px solid #999}.container .addressBox .left .address[data-v-524a6c40]{font-size:%?36?%;margin-bottom:%?10?%;font-weight:500}.container .addressBox .left .personInfo[data-v-524a6c40]{color:#999}.container .addressBox .left .personInfo .phone[data-v-524a6c40]{margin-left:%?20?%}.container .productBox[data-v-524a6c40]{width:100%;display:flex;margin:%?20?% 0;border-radius:%?10?%;border:1px solid #eee;background:#fafafa;border-radius:%?10?%;border:1px solid #999;justify-content:space-around}.container .productBox .headPic[data-v-524a6c40]{display:flex;width:%?200?%;justify-content:center;align-items:center}.container .productBox .headPic uni-image[data-v-524a6c40]{width:%?160?%;height:%?180?%}.container .productBox .proInfo[data-v-524a6c40]{width:%?400?%;display:flex;flex-direction:column;justify-content:space-around}.container .productBox .proInfo .title .mainTitle[data-v-524a6c40]{font-size:%?30?%;font-weight:700}.container .productBox .proInfo .options[data-v-524a6c40]{display:flex;align-items:center;justify-content:space-between}.container .productBox .proInfo .options .price[data-v-524a6c40]{width:%?100?%;font-size:%?30?%;font-weight:700;color:#ac1d33}',""]),t.exports=e}}]);