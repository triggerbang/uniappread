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

/*更新用户信息,更新vuex_user*/
	const updateUser = async () =>{
		//请求用户信息
		const userInfo = await vm.$u.api.userInfo()
		//缓存用户信息
		vm.$u.vuex('vuex_user',userInfo)
	}
	// 注入方法到工具包
	vm.$u.utils = {
		isLogin,
		updateUser
	}
}
export default install;
