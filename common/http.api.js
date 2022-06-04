// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
// let indexUrl = '/api/index';
//api数量多的话，就不写在这

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
    // 此处没有使用传入的params参数  首页
    let index = () => vm.$u.get('/api/index');
    
    //认证相关的API
    let authLogin = params => vm.$u.post('/api/auth/login',params);//登录
	 let authRegister = params => vm.$u.post('/api/auth/register',params);//注册
	let  authLogout = () => vm.$u.post('/api/auth/logout');//退出登录
	let  authOssToken=() => vm.$u.get('/api/auth/oss/token');//获取OSStoken
    //用户相关的API
    let userInfo = () => vm.$u.get('/api/user');//用户详情
	let userInfoUpdate = params  => vm.$u.put('/api/user',params);//修改用户信息
	let uploadUserAvatar = params => vm.$u.post("/api/user/avatar",params); //更新用户头像
	//商品相关API
	let getGoodsCategory = params => vm.$u.get("/api/goods", params); //获取商品分类
	let getGoodsDetail = params => vm.$u.get(`/api/goods/${params}`); //获取商品详情
	let handleGoodCollect = params => vm.$u.post(`/api/collects/goods/${params}`); //操作商品收藏
	// 购物车相关API
	let handleAddCart = params => vm.$u.post("/api/carts", params); //添加商品到购物车
	let getCartList = () => vm.$u.get(`/api/carts`); //获取购物车列表(不含商品信息)
	let getCartGoods = () => vm.$u.get(`/api/carts?include=goods`); //获取购物车列表(含商品信息)
	let changeGoodSelect = params => vm.$u.patch("/api/carts/checked", { cart_ids: params }); //切换商品选中状态
	let handleGoodNum = (cart, num) => vm.$u.put(`/api/carts/${cart}`, { num }); //修改购物车商品数量
	let handleDeleteGood = (cart) => vm.$u.delete(`/api/carts/${cart}`); //移除购物车商品
	
	//订单相关API
	let handleCheckOrder = () => vm.$u.get("/api/orders/preview"); //订单预览列表
	let handleSubmitOrder = (params) => vm.$u.post("/api/orders", params); //提交订单
	let checkOrderList = () => vm.$u.get(`/api/orders`); //查看订单列表
	let checkOrderDetail = (order) => vm.$u.get(`/api/orders/${order}`); //查看订单详情(404)
	let getLogisticsStatus = (order) => vm.$u.get(`/api/orders/${order}/express`); //物流详情
	let handleConfirmOrder = (order) => vm.$u.get(`/api/orders/${order}/confirm`); //确认收货
	let handleEvaluateOrder = (order) => vm.$u.get(`/api/orders/${order}/comment`); //评价订单
	
	// 支付相关API
	let getPayQRcode = (order) => vm.$u.get(`/api/orders/${order}/pay`); //获取支付二维码
	let getPayStatus = (order) => vm.$u.get(`/api/orders/${order}/status`); //获取支付状态
	
	// 收藏相关API
	let getCollections = () => vm.$u.get(`/api/collects`); //获取收藏列表
	let handleCollect = (id) => vm.$u.post(`/api/collects/goods/${id}`); //操作商品收藏
	
	// 地址管理相关API
	let getLocationData = () => vm.$u.get("/api/city"); // 获取省市县数据
	let addAddress = (params) => vm.$u.post("/api/address", params); // 添加地址
	let getAddressList = () => vm.$u.get("/api/address"); // 获取地址列表
	let checkAddressDetail = (address) => vm.$u.get(`/api/address/${address}`); // 地址详情(携带参数展示减少HTTP请求)
	let updateAddress = (id, params) => vm.$u.put(`/api/address/${id}`, params); // 更新地址信息(包含设置默认功能)
	let handleDelAddress = (id) => vm.$u.delete(`/api/address/${id}`); // 删除地址let
	
	
    // 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
    vm.$u.api = {
	index,
	authLogin,
	authRegister,
	authLogout,
	authOssToken,
	userInfo,
	userInfoUpdate,
	uploadUserAvatar,
	getGoodsCategory,
	getGoodsDetail,
	handleGoodCollect,
	handleAddCart,
	getCartList,
	getCartGoods,
	changeGoodSelect,
	handleGoodNum,
	handleDeleteGood,
	handleCheckOrder,
	handleSubmitOrder,
	checkOrderList,
	checkOrderDetail,
	getLogisticsStatus,
	handleConfirmOrder,
	handleEvaluateOrder,
	getPayQRcode,
	getPayStatus,
	getCollections,
	handleCollect,
	getLocationData,
	addAddress,
	getAddressList,
	checkAddressDetail,
	updateAddress,
	handleDelAddress};
};

export default {
    install
};