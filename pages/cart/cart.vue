<template>
  <!-- 大盒子 -->
  <view class="container">
    <!-- 商品卡片 -->
    <view class="Card" v-for="good in goodsList" :key="good.id">
      <!-- 左侧按钮 -->
      <view class="left">
        <!-- 勾选框 -->
        <u-checkbox
          :value="good.is_checked ? true : false"
          :name="good.id"
          shape="circle"
          @change="checkboxChange"
        />
      </view>
      <!-- 右侧商品 -->
      <view class="right">
        <!-- 商品图 -->
        <view class="headPic">
          <image :src="good.goods.cover_url"></image>
        </view>
        <!-- 商品信息 -->
        <view class="proInfo">
          <!-- 商品标题 -->
          <view class="title">
            <view class="mainTitle">{{ good.goods.title }}</view>
            <view class="subTitle">{{ good.goods.description }}</view>
          </view>
          <!-- 商品操作 -->
          <view class="options">
            <text class="price">￥ {{ good.goods.price }}</text>
            <view class="btns">
              <u-button size="mini" @click="handleMinusNum(good.id, good.num)"
                >-</u-button
              >
              <u-button size="mini">{{ good.num }}</u-button>
              <u-button size="mini" @click="handlePlusNum(good.id, good.num)"
                >+</u-button
              >
              <view
                class="iconfont icon-delete"
                @click="deleteProduct(good.id)"
              ></view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 底部bar -->
    <view class="navigation">
      <view class="left">
        <!-- 全选按钮 -->
        <view class="item checkAll">
          <u-checkbox v-model="isAllCheck" shape="circle">全选</u-checkbox>
        </view>
        <!-- 价格总计 -->
        <view class="item">
          合计(元):<text class="totalPrice">￥{{ totalPrice }}</text>
        </view>
      </view>
      <!-- 结算按钮 -->
      <view class="right">
        <view class="cart btn u-line-1" @click="toOrder">去结算</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      // 商品列表
      goodsList: [],
    };
  },
  async onShow() {
    // 校验用户是否登录
    this.$u.utils.isLogin();
    // 获取购物车商品信息
    this.getCartData();
  },
  methods: {
    // 获取购物车商品信息
    async getCartData() {
      let res = await this.$u.api.getCartGoods();
      this.goodsList = res.data;
    },
    // 单个复选框切换选中
    async checkboxChange(obj) {
      // 解构预改变状态值
      const { value, name } = obj;
      // 整理参数数组
      let arr = [];
      // 将已选中的商品ID压入数组
      this.goodsList.forEach((item) => {
        if (item.is_checked) {
          arr.push(item.id);
        }
      });
      // 切换为选中状态
      if (value) {
        // 将目标商品ID追加到选中的数组中
        arr.push(name);
        // 切换为非选中状态
        // 请求切换选中状态
        await this.$u.api.changeGoodSelect(arr);
      } else {
        // 将目标商品ID从选中的数组中移除
        arr.splice(arr.indexOf(name), 1);
        // 请求切换选中状态
        await this.$u.api.changeGoodSelect(arr);
      }
      // 重新获取购物车商品数据
      this.getCartData();
    },
    // 控制商品全选
    async handleCheckAll(val) {
      // 整理商品ID数组
      let arr = [];
      this.goodsList.forEach((item) => {
        // 切换全选
        if (val) {
          arr.push(item.id);
        }
      });
      // 请求切换全选状态
      await this.$u.api.changeGoodSelect(arr);
      // 重新请求商品数据
      this.getCartData();
    },
    // 减少商品数量
    async handleMinusNum(id, num) {
      if (num < 2) {
        this.$u.toast("商品数量无法再减少");
      } else {
        // 减少对应商品数量
        await this.$u.api.handleGoodNum(id, String(num - 1));
        // 更新商品数据
        this.getCartData();
      }
    },
    // 增加商品数量
    async handlePlusNum(id, num) {
      // 减少对应商品数量
      await this.$u.api.handleGoodNum(id, String(num + 1));
      // 更新商品数据
      this.getCartData();
    },
    // 删除商品
    async deleteProduct(id) {
      let res = await this.$u.api.handleDeleteGood(id);
      this.$u.toast("删除成功");
      this.getCartData();
    },
    // 跳转至订单结算页
    toOrder() {
      this.$u.route({
        url: "pages/cart/order",
      });
    },
  },
  computed: {
    // 计算商品总价
    totalPrice() {
      // 筛选已选中商品
      return this.goodsList
        .filter((item) => {
          if (item.is_checked) {
            return item;
          }
          // 计算选中商品的总价
        })
        .reduce((prev, item) => {
          return prev + item.num * item.goods.price;
        }, 0);
    },
    // 商品是否全选(对象写法，分别书写获取和改写值时的get,set方法)
    isAllCheck: {
      get() {
        // 判断是否全选
        return this.goodsList.every((item) => {
          return item.is_checked;
        });
      },
      // 调用切换全选状态的方法
      set(val) {
        this.handleCheckAll(val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 20rpx 100rpx 20rpx;

  .Card {
    background: #fafafa;
    padding: 0 10rpx;
    margin: 20rpx 0;
    height: 200rpx;
    display: flex;
    border-radius: 10rpx;
    border: 1px solid #999;

    .left {
      width: 100rpx;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      ::v-deep .u-checkbox {
        width: 34rpx !important;
      }
    }

    .right {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .headPic {
        flex: 2;
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
        flex: 4;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .title {
          .mainTitle {
            font-size: 30rpx;
            font-weight: bold;
          }

          .subTitle {
            color: #999;
            margin-left: 10rpx;
          }
        }

        .options {
          display: flex;
          align-items: center;
          justify-content: space-around;

          .price {
            flex: 3;
            width: 100rpx;
            font-size: 30rpx;
            font-weight: bold;
            color: #ac1d33;
          }

          .btns {
            flex: 7;
            display: flex;
            margin: 0 4rpx;
            justify-content: space-around;
            align-items: center;
            .icon-delete {
              font-size: 44rpx;
              color: red;
              padding-bottom: 4rpx;
            }
          }
        }
      }
    }
  }
}

/* #ifdef H5 */
.navigation {
  bottom: 50px;
}

/* #endif */

/* #ifndef H5 */
.navigation {
  bottom: 0px;
}

/* #endif */
.navigation {
  display: flex;
  justify-content: space-between;
  border: solid 2rpx #f2f2f2;
  background-color: #ffffff;
  padding: 16rpx 20rpx;
  position: fixed;
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
</style>
