<template>
  <view class="container">
    <!-- 收获地址 -->
    <view class="addressBox">
      <!-- 左侧信息 -->
      <view class="left">
        <view class="address">{{
          defaultAdress ? defaultAdress.address : "收货地址"
        }}</view>
        <view class="personInfo">
          <text>{{ defaultAdress ? defaultAdress.name : "收货人" }}</text>
          <text class="phone">{{
            defaultAdress ? defaultAdress.phone : "电话号码"
          }}</text>
        </view>
      </view>
      <!-- 右侧图标 -->
      <view class="right">
        <u-icon
          name="arrow-right"
          color="#999"
          size="30"
          @click="handleCheckAddress"
        ></u-icon>
      </view>
    </view>
    <!-- 商品列表 -->
    <view class="productBox" v-for="item in goodsList" :key="item.id">
      <!-- 商品图 -->
      <view class="headPic">
        <image :src="item.goods.cover_url"></image>
      </view>
      <!-- 商品信息 -->
      <view class="proInfo">
        <!-- 商品标题 -->
        <view class="title">
          <view class="mainTitle">{{ item.goods.title }}</view>
        </view>
        <!-- 商品操作 -->
        <view class="options">
          <text class="price">￥ {{ item.goods.price }}</text>
          <view class="btns">× {{ item.num }}</view>
        </view>
      </view>
    </view>
    <!-- 底部bar -->
    <view class="navigation">
      <view class="left">
        <!-- 价格总计 -->
        <view class="item">
          合计(元):<text class="totalPrice">￥ {{ totalPrice }}</text>
        </view>
      </view>
      <!-- 结算按钮 -->
      <view class="right">
        <view class="cart btn u-line-1" @click="handleSubmitOrder"
          >提交订单</view
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      goodsList: [],
      addressList: [],
      defaultAdress: {},
    };
  },
  created() {
    // 校验用户是否登录
    this.$u.utils.isLogin();
    // 获取订单地址列表
    this.getOrderAndAdress();
  },
  methods: {
    // 获取订单和地址列表
    async getOrderAndAdress() {
      // 获取订单列表
      let res = await this.$u.api.handleCheckOrder();
      // 保存默认地址
      let defaultAdress = res.address.filter((item) => {
        return item.is_default;
      });
      this.defaultAdress = defaultAdress[0];
      // 保存地址列表和结算商品列表
      this.goodsList = res.carts;
      this.addressList = res.address;
    },
    // 提交订单
    async handleSubmitOrder() {
      // 整理参数
      const params = {
        address_id: this.defaultAdress.id,
      };
      // 提交订单
      const res = await this.$u.api.handleSubmitOrder(params);
      // 成功提示
      if (res) {
        this.$u.toast("订单提交成功");
      }
      // 携带返回信息跳转到订单支付页面
      setTimeout(() => {
        this.$u.route({
          type: "navigateTo",
          url: "pages/cart/payment",
          params: { orderId: res.order_no },
        });
      }, 1000);
    },
    // 选择地址
    handleCheckAddress() {
      this.$u.route({
        type: "navigateTo",
        url: "pages/mine/address",
      });
    },
  },
  computed: {
    // 待支付总额
    totalPrice() {
      return this.goodsList.reduce((prev, item) => {
        return prev + item.num * item.goods.price;
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  border: solid 2rpx #f2f2f2;
  background-color: #ffffff;
  padding: 16rpx 20rpx;
  position: fixed;
  bottom: 0px;
  width: 100%;
  left: 0;
  z-index: 1;

  .left {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20rpx;

    .item {
      font-size: 34rpx;
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

      .totalPrice {
        font-size: 40rpx;
        font-weight: bold;
        color: red;
      }
    }
  }

  .right {
    display: flex;
    font-size: 28rpx;
    align-items: center;

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
  }
}

.container {
  padding: 0 20rpx;

  .addressBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120rpx;
    margin: 20rpx 0;
    padding: 0 20rpx;
    background: #fafafa;
    border-radius: 10rpx;
    border: 1px solid #999;
    .left {
      .address {
        font-size: 36rpx;
        margin-bottom: 10rpx;
        font-weight: 500;
      }

      .personInfo {
        color: #999;

        .phone {
          margin-left: 20rpx;
        }
      }
    }
  }

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
      }
    }
  }
}
</style>
