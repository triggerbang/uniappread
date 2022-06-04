<template>
    <view class="root">
        <!-- 商品主图 -->
        <view class="mainPicBox">
            <image class="mainPic" :src="bookInfo.cover_url"></image>
        </view>
        <!-- 商品信息 -->
        <view class="proInfo">
            <view class="title">{{ bookInfo.title }}</view>
            <view class="priceAndSale">
                <text class="price">￥ {{ bookInfo.price }}</text>
                <text class="sales">销量: {{ bookInfo.sales }}</text>
            </view>
        </view>
        <!-- Tab导航栏 -->
        <u-tabs
            :list="list"
            :is-scroll="false"
            :current="current"
            @change="changeTab"
        ></u-tabs>
        <!-- 富文本区域 -->
        <u-parse
            :html="bookInfo.details"
            v-if="current == 0"
            class="prodetail"
        ></u-parse>
        <!-- 评论区域 -->
        <view v-if="current == 1">
            <comment :comments="comments"></comment>
        </view>
        <!-- 推荐商品 -->
        <view v-if="current == 2" class="recommand">
            <u-row gutter="16" class="u-skeleton">
                <u-col
                    span="6"
                    v-for="(book, index) in commandList"
                    :key="index"
                >
                    <goods-card :book="book"></goods-card>
                </u-col>
            </u-row>
        </view>
        <!-- 底部按钮栏 -->
        <view class="navigation">
            <!-- 收藏、购物车 -->
            <view class="left">
                <!-- 收藏 -->
                <view class="item u-text-center" @click="handleCollect">
                    <template v-if="!isCollect">
                        <u-icon name="star" :size="40" color="#333"></u-icon>
                        <view class="text u-line-1" style="color: #333"
                            >收藏</view
                        >
                    </template>
                    <template v-else>
                        <u-icon name="star" :size="40" color="orange"></u-icon>
                        <view class="text u-line-1" style="color: orange"
                            >已收藏</view
                        >
                    </template>
                </view>
                <!-- 购物车 -->
                <view class="item car" @click="toCart">
                    <u-badge
                        class="car-num"
                        :count="cartProNum"
                        type="error"
                        :offset="[-3, -6]"
                    ></u-badge>
                    <u-icon
                        name="shopping-cart"
                        :size="40"
                        color="#333"
                    ></u-icon>
                    <view class="text u-line-1">购物车</view>
                </view>
            </view>
            <!-- 加购、购买 -->
            <view class="right">
                <view class="cart btn u-line-1" @click="handleAddCart"
                    >加入购物车</view
                >
               
            </view>
        </view>
    </view>
</template>

<script>
// 引入评论组件
import comment from "@/pages/goods/comment.vue";

export default {
    name: "Detail",
    data() {
        return {
            // Tab显示
            current: 0,
            // Tab栏列表
            list: [
                {
                    name: "商品详情",
                },
                {
                    name: "商品评论",
                    count: null,
                },
                {
                    name: "推荐商品",
                },
            ],
            // 富文本内容
            content: "商品详情",
            // 商品ID
            bookId: null,
            // 商品信息
            bookInfo: {
                // 默认数据(解决微信小程序短返回数据前undefined问题)
                title: "",
                sales: 0,
                price: 0,
            },
            // 商品评论
            comments: [],
            // 推荐列表
            like_goods: [],
            // 商品是否收藏
            isCollect: 0,
            // 购物车商品数量
            cartProNum: 0,
        };
    },
    onLoad(options) {
        // 通过onLoad函数的options参数，获取url中的商品ID
        this.bookId = options.id;
        // 获取产品初始数据
        this.getProInitData();
        // 获取购物车产品数量
        this.getCartList();
    },
    methods: {
        // 切换Tab栏
        changeTab(index) {
            this.current = index;
        },
        async getProInitData() {
            // 通过请求商品详情数据
            let res = await this.$u.api.getGoodsDetail(this.bookId);
            // 更新商品收藏状态
            this.isCollect = res.goods.is_collect;
            // 保存商品信息、评论列表、推荐列表
            this.bookInfo = res.goods;
            this.comments = res.goods.comments;
            this.commandList = res.like_goods;
            // 商品评论数量(防止为空默认设置一条)
            this.list[1].count = res.goods.comments.length || 1;
        },
        // 切换商品收藏
        async handleCollect() {
            // 切换商品收藏状态
            await this.$u.api.handleGoodCollect(this.bookId);
            // 切换收藏状态
            this.isCollect = this.isCollect == 1 ? 0 : 1;
            // 动态提示
            this.$u.toast(this.isCollect == 1 ? "收藏成功" : "取消收藏成功");
        },
        // 添加购物车
        async handleAddCart() {
            // 整理参数
            const params = {
                goods_id: this.bookId,
            };
            // 添加购物车
            await this.$u.api.handleAddCart(params);
            // 提示信息
            this.$u.toast("添加成功");
            // 获取购物车列表
            this.getCartList();
        },
        // 获取购物车商品数量
        async getCartList() {
            // 如果用户已登录，获取商品数量
            if (this.vuex_token) {
                let res = await this.$u.api.getCartList();
                // 筛选当前添加的书本
                let book = res.data.filter((item) => {
                    return item.goods_id == this.bookId;
                });
                // 保存当前操作商品数量
                this.cartProNum = book.length == 0 ? 0 : book[0].num;
            }
        },
        // 跳转至购物车
        toCart() {
            this.$u.route({
                type: "switchTab",
                url: "pages/cart/cart",
            });
        },
    },
    components: {
        comment,
    },
};
</script>

<style lang="scss" scoped>
// 根标签
.root {
    padding-bottom: 88rpx;
}

// 商品主图样式
.mainPicBox {
    width: 100%;
    height: 500rpx;
    display: flex;
    justify-content: center;
    align-items: center;

    .mainPic {
        height: 440rpx;
        width: 400rpx;
    }
}

// 商品信息样式
.proInfo {
    padding: 10rpx 30rpx;
    border-bottom: 1px solid #eee;

    .title {
        font-size: 40rpx;
        font-weight: bold;
        margin-bottom: 20rpx;
    }

    .priceAndSale {
        display: flex;
        justify-content: space-between;

        .price {
            font-size: 36rpx;
            color: red;
            font-weight: bold;
        }

        .sales {
            color: #999;
        }
    }
}

// 商品详情样式
.prodetail {
    padding: 0 20rpx;
}

.recommand {
    padding: 0 20rpx;
}

// 推荐商品样式

.recommand {
    padding: 0 20rpx;
}

// 底部按纽样式
.navigation {
    display: flex;
    width: 100%;
    border: solid 2rpx #f2f2f2;
    background-color: #ffffff;
    padding-top: 10rpx;
    position: fixed;
    bottom: 0;

    .left {
        display: flex;
        font-size: 20rpx;
        margin-right: 35rpx;

        .item {
            margin: 0 30rpx;

            &.car {
                text-align: center;
                position: relative;

                .car-num {
                    position: absolute;
                    top: -10rpx;
                    right: -10rpx;
                }
            }
        }
    }

    .right {
        display: flex;
        font-size: 28rpx;
        align-items: center;
        margin-left: 80rpx;

        .btn {
            line-height: 66rpx;
            padding: 0 30rpx;
            border-radius: 36rpx;
            color: #ffffff;
        }

        .cart {
            background-color: #ed3f14;
            margin-right: 30rpx;
        }

        .buy {
            background-color: #ff7900;
        }
    }
}
</style>
