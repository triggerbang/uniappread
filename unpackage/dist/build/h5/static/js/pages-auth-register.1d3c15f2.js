(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-auth-register"],{5670:function(e,t,i){var a=i("64e2");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("77f88f40",a,!0,{sourceMap:!1,shadowMode:!1})},"5a32":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={uField:i("7f33").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"wrap u-p-t-80"},[i("u-field",{attrs:{label:"昵称",placeholder:"请输入昵称",focus:!0,required:!0},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),i("u-field",{attrs:{label:"邮箱",placeholder:"请输入邮箱",required:!0,"error-message":e.emailMsg},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),i("u-field",{attrs:{label:"密码",placeholder:"请输入密码",required:!0,"error-message":e.pwdMsg,password:!0},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),i("u-field",{attrs:{label:"确认密码",placeholder:"请确认密码",required:!0,password:!0,"error-message":e.errorMessage},model:{value:e.password_confirmation,callback:function(t){e.password_confirmation=t},expression:"password_confirmation"}}),i("v-uni-button",{staticClass:"getCaptcha",style:[e.inputStyle],attrs:{loading:e.submitBtn,disabled:e.submitBtn},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("注册")])],1)},r=[]},"64e2":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-field[data-v-eef6029a]{font-size:%?28?%;padding:%?20?% %?28?%;text-align:left;position:relative;color:#303133}.u-field-inner[data-v-eef6029a]{display:flex;flex-direction:row;align-items:center}.u-textarea-inner[data-v-eef6029a]{align-items:flex-start}.u-textarea-class[data-v-eef6029a]{min-height:%?96?%;width:auto;font-size:%?28?%}.fild-body[data-v-eef6029a]{display:flex;flex-direction:row;flex:1;align-items:center}.u-arror-right[data-v-eef6029a]{margin-left:%?8?%}.u-label-text[data-v-eef6029a]{display:inline-flex}.u-label-left-gap[data-v-eef6029a]{margin-left:%?6?%}.u-label-postion-top[data-v-eef6029a]{flex-direction:column;align-items:flex-start}.u-label[data-v-eef6029a]{width:%?130?%;flex:1 1 %?130?%;text-align:left;position:relative;display:flex;flex-direction:row;align-items:center}.u-required[data-v-eef6029a]::before{content:"*";position:absolute;left:%?-16?%;font-size:14px;color:#fa3534;height:9px;line-height:1}.u-field__input-wrap[data-v-eef6029a]{position:relative;overflow:hidden;font-size:%?28?%;height:%?48?%;flex:1;width:auto}.u-clear-icon[data-v-eef6029a]{display:flex;flex-direction:row;align-items:center}.u-error-message[data-v-eef6029a]{color:#fa3534;font-size:%?26?%;text-align:left}.placeholder-style[data-v-eef6029a]{color:#969799}.u-input-class[data-v-eef6029a]{font-size:%?28?%}.u-button-wrap[data-v-eef6029a]{margin-left:%?8?%}',""]),e.exports=t},"6a53":function(e,t,i){"use strict";var a=i("5670"),n=i.n(a);n.a},7575:function(e,t,i){"use strict";i.r(t);var a=i("a5b1"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},"7f33":function(e,t,i){"use strict";i.r(t);var a=i("b799"),n=i("7575");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("6a53");var l,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"eef6029a",null,!1,a["a"],l);t["default"]=s.exports},"877b":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.wrap .getCaptcha[data-v-28d0be6b]{background-color:#a2b8ff;color:#909399;border:none;font-size:%?30?%;padding:%?12?% 0}.wrap .getCaptcha[data-v-28d0be6b]::after{border:none}',""]),e.exports=t},a5b1:function(e,t,i){"use strict";i("a9e3"),i("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"u-field",props:{icon:String,rightIcon:String,required:Boolean,label:String,password:Boolean,clearable:{type:Boolean,default:!0},labelWidth:{type:[Number,String],default:130},labelAlign:{type:String,default:"left"},inputAlign:{type:String,default:"left"},iconColor:{type:String,default:"#606266"},autoHeight:{type:Boolean,default:!0},errorMessage:{type:[String,Boolean],default:""},placeholder:String,placeholderStyle:String,focus:Boolean,fixed:Boolean,value:[Number,String],type:{type:String,default:"text"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},labelPosition:{type:String,default:"left"},fieldStyle:{type:Object,default:function(){return{}}},clearSize:{type:[Number,String],default:30},iconStyle:{type:Object,default:function(){return{}}},borderTop:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},trim:{type:Boolean,default:!0}},data:function(){return{focused:!1,itemIndex:0}},computed:{inputWrapStyle:function(){var e={};return e.textAlign=this.inputAlign,"left"==this.labelPosition?e.margin="0 8rpx":e.marginRight="8rpx",e},rightIconStyle:function(){var e={};return"top"==this.arrowDirection&&(e.transform="roate(-90deg)"),"bottom"==this.arrowDirection?e.transform="roate(90deg)":e.transform="roate(0deg)",e},labelStyle:function(){var e={};return"left"==this.labelAlign&&(e.justifyContent="flext-start"),"center"==this.labelAlign&&(e.justifyContent="center"),"right"==this.labelAlign&&(e.justifyContent="flext-end"),e},justifyContent:function(){return"left"==this.labelAlign?"flex-start":"center"==this.labelAlign?"center":"right"==this.labelAlign?"flex-end":void 0},inputMaxlength:function(){return Number(this.maxlength)},fieldInnerStyle:function(){var e={};return"left"==this.labelPosition?e.flexDirection="row":e.flexDirection="column",e}},methods:{onInput:function(e){var t=e.detail.value;this.trim&&(t=this.$u.trim(t)),this.$emit("input",t)},onFocus:function(e){this.focused=!0,this.$emit("focus",e)},onBlur:function(e){var t=this;setTimeout((function(){t.focused=!1}),100),this.$emit("blur",e)},onConfirm:function(e){this.$emit("confirm",e.detail.value)},onClear:function(e){this.$emit("input","")},rightIconClick:function(){this.$emit("right-icon-click"),this.$emit("click")},fieldClick:function(){this.$emit("click")}}};t.default=a},b799:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={uIcon:i("4053").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-field",class:{"u-border-top":e.borderTop,"u-border-bottom":e.borderBottom}},[i("v-uni-view",{staticClass:"u-field-inner",class:["textarea"==e.type?"u-textarea-inner":"","u-label-postion-"+e.labelPosition]},[i("v-uni-view",{staticClass:"u-label",class:[e.required?"u-required":""],style:{justifyContent:e.justifyContent,flex:"left"==e.labelPosition?"0 0 "+e.labelWidth+"rpx":"1"}},[e.icon?i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-icon",attrs:{size:"32","custom-style":e.iconStyle,name:e.icon,color:e.iconColor}})],1):e._e(),e._t("icon"),i("v-uni-text",{staticClass:"u-label-text",class:[this.$slots.icon||e.icon?"u-label-left-gap":""]},[e._v(e._s(e.label))])],2),i("v-uni-view",{staticClass:"fild-body"},[i("v-uni-view",{staticClass:"u-flex-1 u-flex",style:[e.inputWrapStyle]},["textarea"==e.type?i("v-uni-textarea",{staticClass:"u-flex-1 u-textarea-class",style:[e.fieldStyle],attrs:{value:e.value,placeholder:e.placeholder,placeholderStyle:e.placeholderStyle,disabled:e.disabled,maxlength:e.inputMaxlength,focus:e.focus,autoHeight:e.autoHeight,fixed:e.fixed},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.onInput.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.onBlur.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.fieldClick.apply(void 0,arguments)}}}):i("v-uni-input",{staticClass:"u-flex-1 u-field__input-wrap",style:[e.fieldStyle],attrs:{type:e.type,value:e.value,password:e.password||"password"===this.type,placeholder:e.placeholder,placeholderStyle:e.placeholderStyle,disabled:e.disabled,maxlength:e.inputMaxlength,focus:e.focus,confirmType:e.confirmType},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.onBlur.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.onInput.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.fieldClick.apply(void 0,arguments)}}})],1),e.clearable&&""!=e.value&&e.focused?i("u-icon",{staticClass:"u-clear-icon",attrs:{size:e.clearSize,name:"close-circle-fill",color:"#c0c4cc"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClear.apply(void 0,arguments)}}}):e._e(),i("v-uni-view",{staticClass:"u-button-wrap"},[e._t("right")],2),e.rightIcon?i("u-icon",{staticClass:"u-arror-right",style:[e.rightIconStyle],attrs:{name:e.rightIcon,color:"#c0c4cc",size:"26"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.rightIconClick.apply(void 0,arguments)}}}):e._e()],1)],1),!1!==e.errorMessage&&""!=e.errorMessage?i("v-uni-view",{staticClass:"u-error-message",style:{paddingLeft:e.labelWidth+"rpx"}},[e._v(e._s(e.errorMessage))]):e._e()],1)},r=[]},d139f:function(e,t,i){"use strict";i.r(t);var a=i("e853"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},dc44:function(e,t,i){var a=i("877b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("4ad64966",a,!0,{sourceMap:!1,shadowMode:!1})},e68d:function(e,t,i){"use strict";i.r(t);var a=i("5a32"),n=i("d139f");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("ff86");var l,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"28d0be6b",null,!1,a["a"],l);t["default"]=s.exports},e853:function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=a(i("1da1")),r={data:function(){return{name:"",email:"",password:"",password_confirmation:"",submitBtn:!1}},computed:{inputStyle:function(){var e={};return this.$u.test.email(this.email)&&this.password&&this.password==this.password_confirmation&&this.name&&(e.color="#fff",e.backgroundColor=this.$u.color["primary"]),e},emailMsg:function(){return this.email?this.$u.test.email(this.email)?"":"邮箱格式错误":""},pwdMsg:function(){return this.password?this.$u.test.rangeLength(this.password,[6,12])?"":"密码长度需在6-12位":""},errorMessage:function(){return this.password!==this.password_confirmation?"两次密码不一致":""}},methods:{toRegister:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.submitBtn=!0,i={name:e.name,email:e.eamil,password:e.password,password_confirmation:e.password_confirmation},e.$u.api.authRegister(i),e.submitBtn=!1,e.$u.toast("注册成功！"),setTimeout((function(){e.$u.route({type:"redirect",url:"/pages/auth/login",params:{email:e.email,password:e.password}})}),1500);case 6:case"end":return t.stop()}}),t)})))()},submit:function(){if(!(this.$u.test.email(this.email)&&this.password&&this.password==this.password_confirmation&&this.name))return!1;this.toRegister()}}};t.default=r},ff86:function(e,t,i){"use strict";var a=i("dc44"),n=i.n(a);n.a}}]);