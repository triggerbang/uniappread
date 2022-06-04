<template>
    <view class="container">
        <!-- 商品列表 -->
        <view class="productBox" v-for="item in collectList" data-type="容器" :key="item.id" @click="handleProDetail($event,item.goods.id)">
            <!-- 商品图 -->
            <view class="headPic">
                <image :src="item.goods.cover_url"></image>
            </view>
            <!-- 商品信息 -->
            <view class="proInfo">
                <!-- 商品标题 -->
                <view class="title">
                    <view class="mainTitle">{{ item.goods.title }}</view>
                    <view class="subTitle">{{ item.goods.description }}</view>
                </view>
                <!-- 商品操作 -->
                <view class="options">
                    <text class="price">￥ {{ item.goods.price }}</text>
                    <view class="iconfont icon-shoucang" data-type="收藏" @click.stop="handleCancelCollect($event,item.goods.id)"></view>
                </view>
            </view> 
        </view>
        <!-- 空内容提示 -->
        <u-empty text="暂无收藏" mode="favor" margin-top="300" v-if="!collectList.length"></u-empty>
    </view>
</template>

<script>
export default {
    name:"Collect",
    data(){
        return{
            // 收藏列表
            collectList:[],
        }
    },
    created(){
        this.getCollectList();
    },
    methods: {
        // 获取收藏列表
        async getCollectList() {
            const res = await this.$u.api.getCollections();
            this.collectList = res.data;
        },
        // 取消收藏
        async handleCancelCollect(e,id){
            const res =  await this.$u.api.handleCollect(id);
            this.$u.toast("取消收藏成功");
            // 更新收藏列表数据
            this.getCollectList();
        },
        // 访问商品详情页
        handleProDetail(e,id){
            // 路由跳转
            uni.redirectTo({
                url:`/pages/goods/detail?id=${id}`,
            })
        }
    },
}
</script lang="scss" scoped>

<style lang="scss" scoped>
.container{
    padding: 20rpx;
    .productBox {
        width: 100%;
        display: flex;
        margin: 20rpx 0;
        border-radius: 10rpx;
        border: 1px solid #eee;
        background: #fafafa;
        border-radius: 10rpx;
        border: 1px solid #999;
        justify-content: space-around;

        .headPic {
            display: flex;
            width: 200rpx;
            justify-content: center;
            align-items: center;

            image {
                width: 160rpx;
                height: 180rpx;
            }
        }

        .proInfo {
            width: 400rpx;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .title {
                .mainTitle {
                    font-size: 30rpx;
                    font-weight: bold;
                }
                .subTitle{
                    font-size: 20rpx;
                }
            }

            .options {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .price {
                    width: 100rpx;
                    font-size: 30rpx;
                    font-weight: bold;
                    color: #ac1d33;
                }
                .icon-shoucang{
                    font-size: 38rpx;
                    color: rgb(195, 195, 0);
                }
            }
        }
    }
}
</style>