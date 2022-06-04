<template>
	<view>
		
		<view class="u-flex user-box u-p-t-30 u-p-l-30 u-p-r-20 u-p-b-30">
		<view class="u-m-r-10">
		  <u-avatar :src="vuex_user.avatar_url" size="120"></u-avatar>
		</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">{{ vuex_user.name }}</view>
				<view class="u-font-14 u-tips-color">邮箱:{{vuex_user.email || "请先登录" }}</view>
			</view>
		
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item   icon="account" title="个人信息"  @click="toBaseInfo"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
		<u-cell-group>
		  <u-cell-item icon="star" title="我的收藏" @click="checkCollect"></u-cell-item>
		  <u-cell-item icon="rmb-circle" title="我的订单" @click="checkMyOrder"></u-cell-item>
		  <u-cell-item icon="map" title="收货地址" @click="checkAddress"></u-cell-item>
		</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="man-delete" title="退出登录" @click="handleLogout"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {
			if(!this.$u.utils.isLogin()) return 
		},
		methods: {
			 // 跳转个人信息页
			toBaseInfo(){
				this.$u.route({
					url:'pages/center/baseInfo'
				})
			},
			// 跳转我的收藏页
			checkCollect() {
			  this.$u.route({
			    url: "pages/center/collect",
			  });
			},
			// 跳转收货地址
			checkAddress() {
			  this.$u.route({
			    url: "pages/center/address",
			  });
			},
			// 管理我的订单
			checkMyOrder() {
			  this.$u.route({
			    url: "pages/center/myOrder",
			  });
			},
		//退出登录
		async handleLogout() {
		      // 请求服务器退出登录
		      await this.$u.api.authLogout();
		      // 提示信息
		      this.$u.toast("退出成功");
		      setTimeout(() => {
		        // 清除本地缓存的用户信息与token
		        this.$u.vuex("vuex_user", {});
		        this.$u.vuex("vuex_token", null);
		        // 路由跳转到首页(选择reLaunch方式，避免其他需要登录授权的页面出错)
		        this.$u.route({
		          type: "reLaunch",
		          url: "pages/index/index",
		        });
		      }, 1000);
		    },
		  },
		};
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
.avatar-body{
	height: 70px;
	width: 70px;
}
</style>
