<template>
  <view class="container">
    <!-- 已有地址列表 -->
    <view class="item" v-for="res in siteList" :key="res.id">
      <view class="top">
        <view class="name">{{ res.name }}</view>
        <view class="phone">{{ res.phone }}</view>
        <!-- 地址tag -->
        <view class="tag">
          <text v-show="res.is_default">默认</text>
        </view>
      </view>
      <!-- 编辑按钮 -->
      <view class="bottom">
        {{ res.province + res.city + res.county }}
        <u-icon
          name="edit-pen"
          :size="40"
          color="#999999"
          @click="handleSite(res)"
        ></u-icon>
      </view>
    </view>
    <!-- 新增收获地址按钮 -->
    <view class="addSite" @click="handleSite">
      <view class="add">
        <u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon
        >新增收货地址
      </view>
    </view>
    <!-- 空内容提示 -->
    <u-empty
      text="暂无收货地址"
      mode="favor"
      margin-top="300"
      v-if="!siteList.length"
    ></u-empty>
  </view>
</template>

<script>
export default {
  name: "Address",
  data() {
    return {
      // 地址列表
      siteList: [],
    };
  },
  created() {
    this.getAddressList();
  },
  onShow(){
	this.getAddressList();
  },
  methods: {
    // 获取省市县数据
    async getAddressList() {
      const res = await this.$u.api.getAddressList();
      this.siteList = res.data || [];
    },
    // 新增或编辑收货地址
    handleSite(res) {
      this.$u.route({
        type: "navigateTo",
        url: "/pages/center/addSite",
        params: res,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 10rpx;

  .item {
    padding: 20rpx 20rpx;
    border: 1px solid #999;
    margin: 20rpx 0;
    border-radius: 10rpx;

    .top {
      display: flex;
      font-weight: bold;
      font-size: 34rpx;
      .phone {
        margin-left: 60rpx;
      }
      .tag {
        display: flex;
        font-weight: normal;
        align-items: center;
        text {
          display: block;
          width: 60rpx;
          height: 34rpx;
          line-height: 34rpx;
          color: #ffffff;
          font-size: 20rpx;
          border-radius: 6rpx;
          text-align: center;
          margin-left: 30rpx;
          background-color: rgb(49, 145, 253);
        }
        .red {
          background-color: red;
        }
      }
    }
    .bottom {
      display: flex;
      margin-top: 20rpx;
      font-size: 28rpx;
      justify-content: space-between;
      color: #999999;
    }
  }
  .addSite {
    display: flex;
    justify-content: space-around;
    width: 600rpx;
    line-height: 100rpx;
    position: absolute;
    bottom: 50rpx;
    left: 80rpx;
    background-color: #3191fd;
    border-radius: 60rpx;
    font-size: 30rpx;
    .add {
      display: flex;
      align-items: center;
      color: #ffffff;
      .icon {
        margin-right: 10rpx;
      }
    }
  }
}
</style>
