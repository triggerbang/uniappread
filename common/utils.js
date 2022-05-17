const install = (Vue, vm) => {
// 初始化工具包
	vm.$u.utils = {};
const  isLogin = () => {
		// 读取本地token判断用户登陆状态
const token = vm.vuex_token;
if(!token){
	//来自哪个页面
	const currentPage = getCurrentPages().pop()
	//获取页面路径和请求参数
	const {options,route} = currentPage
	const optionsKeys = Object.keys(options)
	let params = ''
	if (optionsKeys.length!==0 ){
		params = optionsKeys.reduce((pre,current) =>{
			return pre + current +'='+ options[current] +'&'
		},'?').slice(0,-1)
	}
	//缓存当前页，用于登录或者注册之后的跳转
	uni.setStorageSync('back_url',route+params)
	// 提示信息
				vm.$u.toast("请登录");
				// 跳转登录页
				setTimeout(() => {
					vm.$u.route({
						// 设置重定向跳转（无法返回）
						type: 'redirect',
						url: 'pages/auth/login',
					})
				}, 1000)
				return false;
			} else {
				return true;
			} 
}

	// 注入方法到工具包
	vm.$u.utils = {
		isLogin
	}
}
export default install;
// const install = (Vue, vm) => {
// 	// 初始化工具包
// 	vm.$u.utils = {};

// 	// 校验是否登录
// 	const isLogin = () => {
// 		// 读取本地token判断用户登陆状态
// 		const token = vm.vuex_token;
// 		// 如果未登录（跳转到登录页）
// 		if (!token) {
// 			// 1.获取来源页参数与路径
// 			const {
// 				options,
// 				route
// 			} = getCurrentPages().pop();
// 			// 2.获取参数对象的key数组
// 			const optionKeys = Object.keys(options);
// 			let params = "";
// 			// 3.如果有参数，则整理参数字符串为query形式
// 			if (optionKeys.length) {
// 				// reduce参数:上次返回值、当前值、下标、数组
// 				params = optionKeys.reduce((prev, current, index, arr) => {
// 					return `${prev}${current}=${options[current]}&`;
// 				}, "?").slice(0, -1)
// 			}
// 			// 4.本地缓存来源页路径与参数
// 			uni.setStorageSync("originRoute", route + params);
// 			// 提示信息
// 			vm.$u.toast("请登录");
// 			// 跳转登录页
// 			setTimeout(() => {
// 				vm.$u.route({
// 					// 设置重定向跳转（无法返回）
// 					type: 'redirect',
// 					url: 'pages/auth/login',
// 				})
// 			}, 1000)
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}

// 	// 获取并本地缓存用户信息
// 	const getAndSaveUserInfo = async () => {
// 		// 获取用户信息d
// 		let userInfo = await vm.$u.api.getUserInfo();
// 		// 本地缓存用户信息
// 		vm.$u.vuex("vuex_user", userInfo);
// 	}

// 	// 注入方法到工具包
// 	vm.$u.utils = {
// 		isLogin,
// 		getAndSaveUserInfo
// 	}
// }

// export default install;
