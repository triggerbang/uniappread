<template>
	<view class="u-wrap">
		<!-- 搜索按钮 -->
		<view class="u-search-box">
			<u-search placeholder="搜索商品" v-model="keyword" shape="square" @custom="searchProduct" @clear="clearSearch">
			</u-search>
		</view>
		<!-- 分类展示区 -->
		<view class="u-menu-wrap">
			<!-- 左侧TabBar -->
			<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
				<view v-for="(item,index) in categories" :key="index">
					<view v-for="(itm,idx) in item.children.slice(0,3)" :key="idx" class="u-tab-item"
						:class="currentId==itm.id ? 'u-tab-item-active' : ''" :data-current="idx"
						@tap.stop="swichMenu(itm.id)">
						<text class="u-line-1">{{itm.name}}</text>
					</view>
				</view>
			</scroll-view>
			<!-- 右侧商品 -->
			<block>
				<scroll-view scroll-y class="right-box" @scrolltolower="scrollToBottom">
					<view class="page-view">
						<view class="class-item">
							<view class="item-container">
							
								<navigator :url="`/pages/goods/detail?id=${book.id}`"
									class="thumb-box u-p-t-40 u-p-b-40" v-for="(book, index) in goodsList" :key="index">
									<image class="item-menu-image" :src="book.cover_url" mode=""></image>
									<view class="item-menu-name">{{book.title}}</view>
								</navigator>
							
								<!-- 空内容提示 -->
								<view v-if="!goodsList.length" class="u-flex-1 u-p-t-80 u-p-b-80">
									<u-empty text="暂无数据" mode="list"></u-empty>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				// Tab栏滚动条位置
				scrollTop: 0,
				// 选中卡片ID(初始为2)
				currentId: null,
				// 分类数据
				categories: [],
				// 商品数据
				goodsList: [],
				// 搜索关键字
				keyword: "",
				// 当前页码
				page: 1,
				// 是否最后一页
				isLastPage: false
			}
		},
		onLoad() {
			this.getCateAndProData();
		},
		methods: {
			// 获取并储存分类和商品列表数据
			async getCateAndProData() {
				// 整理参数
				const params = {
					page: this.page,
					title: this.keyword,
					category_id: this.currentId
				}
				// 请求并保存数据
				const res = await this.$u.api.getGoodsCategory(params);
				this.categories = res.categories.slice(0, 5);
				this.goodsList = [...this.goodsList, ...res.goods.data];
				// 判断当前数据是否存在下一页
				this.isLastPage = res.goods.next_page_url ? false : true;
			},
			// 点击左边的栏目切换
			async swichMenu(id) {
				// 如果点击当前卡片不进行操作
				if (id == this.currentId) return;
				// 改变当前卡片序号
				this.currentId = id;
				// 清除数据缓存
				this.clearSearchCache();
				// 调用更新搜索数据
				this.getCateAndProData();
			},
			// 搜索商品
			searchProduct() {
				// 清除数据缓存
				this.clearSearchCache();
				// 调用更新搜索数据
				this.getCateAndProData();
			},
			// 清除搜索
			clearSearch() {
				// 清除数据缓存（关键字自动会清除）
				this.clearSearchCache();
				// 调用更新搜索数据
				this.getCateAndProData();
			},
			// 商品区域触底事件(分页加载)
			scrollToBottom() {
				// 如果未到底页
				if (!this.isLastPage) {
					// 页码加一
					this.page += 1;
					// 再次请求数据
					this.getCateAndProData();
				} 

			},
			// 清除上次筛选数据缓存
			clearSearchCache() {
				this.page = 1;
				this.goodsList = [];
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}

	.u-search-box {
		padding: 18rpx 30rpx;
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}

	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}

	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}

	.u-tab-view {
		width: 200rpx;
		height: 100%;
	}

	.u-tab-item {
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}

	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fff;
	}

	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid $u-type-primary;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}

	.u-tab-view {
		height: 100%;
	}

	.right-box {
		background-color: rgb(250, 250, 250);
	}

	.page-view {
		padding: 16rpx;
	}

	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}

	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
	}

	.item-menu-name {
		font-weight: normal;
		font-size: 24rpx;
		color: $u-main-color;
	}

	.item-container {
		display: flex;
		flex-wrap: wrap;
	}

	.thumb-box {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 20rpx;
	}

	.item-menu-image {
		width: 120rpx;
		height: 120rpx;
	}
</style>
