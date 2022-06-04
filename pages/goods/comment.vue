<template>
	<view>
		<view class="comment" v-for="(comment, index) in comments.length !== 0 ? comments : defaultComments"
			:key="index">
			<!-- 左侧头像 -->
			<view class="left">
				<image :src="comment.user.avatar_url" mode="aspectFill"></image>
			</view>
			<!-- 右侧内容 -->
			<view class="right">
				<!-- 顶部昵称 -->
				<view class="top">
					<view class="name">{{ comment.user.name }}</view>
				</view>
				<!-- 评论内容 -->
				<view class="content">{{ comment.content }}</view>
				<!-- 底部时间 -->
				<view class="bottom">{{ comment.created_at }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Comments",
		props: {
			// 评论列表
			comments: {
				type: Array,
				default () {
					return []
				},
			},
		},
		data() {
			return {
				// 默认评论测试
				defaultComments: [{
					id: 1,
					created_at: '12-25 18:58',
					content: '很不错的一本书，带给我很多收获，好评！',
					user: {
						name: '叶轻眉',
						avatar_url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
					}
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment {
		display: flex;
		padding: 30rpx;

		.left {
			image {
				width: 64rpx;
				height: 64rpx;
				border-radius: 50%;
				background-color: #f2f2f2;
			}
		}

		.right {
			flex: 1;
			padding-left: 20rpx;
			font-size: 30rpx;

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;

				.name {
					color: #5677fc;
				}

				.like {
					display: flex;
					align-items: center;
					color: #9a9a9a;
					font-size: 26rpx;

					.num {
						margin-right: 4rpx;
						color: #9a9a9a;
					}
				}

				.highlight {
					color: #5677fc;

					.num {
						color: #5677fc;
					}
				}
			}

			.content {
				margin-bottom: 10rpx;
			}

			.reply-box {
				background-color: rgb(242, 242, 242);
				border-radius: 12rpx;

				.item {
					padding: 20rpx;
					border-bottom: solid 2rpx $u-border-color;

					.username {
						font-size: 24rpx;
						color: #999999;
					}
				}

				.all-reply {
					padding: 20rpx;
					display: flex;
					color: #5677fc;
					align-items: center;

					.more {
						margin-left: 6rpx;
					}
				}
			}

			.bottom {
				margin-top: 20rpx;
				display: flex;
				font-size: 24rpx;
				color: #9a9a9a;

				.reply {
					color: #5677fc;
					margin-left: 10rpx;
				}
			}
		}
	}
</style>
