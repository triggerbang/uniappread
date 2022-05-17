<template>

    <navigator class="goods-item">
      	<u-image class="u-skeleton-fillet" width="100%" height="300rpx" :src="item.cover_url"></u-image>
    <view class="title u-line-1 u-skeleton-rect">{{item.title ? item.title:'Loading'}}</view>
    <view class="u-flex u-row-between">
      <view class="price u-skeleton-rect">¥{{item.price}}</view>
      <view class="sales u-skeleton-rect">销量{{item.sales}}</view>
    </view>
    </navigator>
</template>

<script>
  export default {
    name:"goods-card",
    props:{
      item:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss" scoped>
.goods-item{
  padding: 40rpx;
  margin-top: 30rpx;
  box-shadow: 0 12rpx 20rpx 0 rgba($color: #000000, $alpha: 0.1);
  .title{
    margin: 10rpx 0 ;
    font-weight: 500;
    font-size:32rpx ;
     width:100%; 
  }
  .price{
    color: red;
    width:40%; 
  }
  .sales{
    color:#82848A;
     width:40%;
  }
}
</style>
