<template>
  <view class="wrap">
    <!-- 顶部表单 -->
    <view class="top">
      <!-- 收货人 -->
      <view class="item">
        <view class="left"><text style="color: red">*</text>收货人</view>
        <input
          v-model="address.name"
          type="text"
          placeholder-class="line"
          placeholder="请填写收货人姓名"
        />
      </view>
      <!-- 手机号码 -->
      <view class="item">
        <view class="left"><text style="color: red">*</text>手机号码</view>
        <input
          v-model="address.phone"
          type="text"
          placeholder-class="line"
          placeholder="请填写收货人手机号"
        />
      </view>
      <!-- 所在地区 -->
      <view class="item" @tap="show = true">
        <view class="left"><text style="color: red">*</text>所在地区</view>
        <input
          disabled
          :value="location"
          type="text"
          placeholder-class="line"
          placeholder="省市区县、乡镇等"
        />
      </view>
      <!-- 详细地址 -->
      <view class="item address">
        <view class="left"><text style="color: red">*</text>详细地址</view>
        <textarea
          v-model="address.address"
          type="text"
          placeholder-class="line"
          placeholder="请输入详细地址"
        />
      </view>
      <!-- 默认地址按钮 -->
      <view class="defult">
        <view class="set">设置默认地址</view>
        <u-switch v-model="address.isDefault" color="#3191FD"></u-switch>
      </view>
      <!-- 按钮 -->
      <view class="btns">
        <!-- 删除按钮 -->
        <u-button
          @click="handleDelAddress"
          class="btn"
          shape="circle"
          type="error"
        >
          删除地址
        </u-button>
        <!-- 保存按钮 -->
        <u-button
          @click="handleSaveAddress"
          shape="circle"
          :type="isSubmit ? 'primary' : 'default'"
          class="btn"
        >
          保存地址
        </u-button>
      </view>
    </view>
    <!-- 地址选择器 -->
    <u-picker
      mode="region"
      ref="uPicker"
      v-model="show"
      @confirm="confirmAddress"
    />
  </view>
</template>

<script>
export default {
  name: "addSite",
  data() {
    return {
      show: false,
      address: {
        name: "",
        phone: "",
        address: "",
        province: "",
        city: "",
        county: "",
      },
    };
  },
  onLoad(options) {
    // 如果传输的是地址对象
    if (options.id) {
      // 添加默认地址标识
      options.isDefault = options.is_default == 0 ? false : true;
      // 保存地址
      this.address = options;
    }
  },
  methods: {
    // 保存地址
    async handleSaveAddress() {
      // 判断是否可提交
      if (this.isSubmit) {
        const address = this.address;
        // 整理参数
        const params = {
          name: address.name,
          address: address.address,
          phone: address.phone,
          province: address.province,
          city: address.city,
          county: address.county,
          is_default: address.isDefault ? 1 : 0,
        };
        // 根据是否有ID判断新增与更新地址
        if (address.id) {
          const res = await this.$u.api.updateAddress(address.id, params);
        } else {
          const res = await this.$u.api.addAddress(params);
        }
        // 回到上一页
        this.$u.toast("保存成功");
        setTimeout(() => {
          this.$u.route({
            type: "redirect",
            url: "/pages/mine/address",
          });
        }, 1000);
      } else {
        this.$u.toast("请完整填写必填项目");
      }
    },
    // 确认选择地址
    confirmAddress(params) {
      // 更改地址省市区信息
      this.address.province = params.province.label;
      this.address.city = params.city.label;
      this.address.county = params.area.label;
    },
    // 删除地址
    async handleDelAddress() {
      const address = this.address;
      if (address.isDefault) {
        this.$u.toast("默认地址不能删除");
      } else if (address.id) {
        const res = await this.$u.api.handleDelAddress(address.id);
        // 返回地址列表
        this.$u.toast("删除成功");
        setTimeout(() => {
          this.$u.route({
            type: "redirect",
            url: "/pages/mine/address",
          });
        }, 1000);
      } else {
        this.$u.toast("地址还未保存");
      }
    },
  },
  computed: {
    // 省市区地址
    location() {
      return this.address.province + this.address.city + this.address.county;
    },
    // 是否允许提交表单
    isSubmit() {
      let { name, phone, address } = this.address;
      return name != "" && phone != "" && address != "" && this.location != "";
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .line {
  color: $u-light-color;
  font-size: 28rpx;
}
.wrap {
  background-color: #f2f2f2;
  .top {
    background-color: #ffffff;
    border-top: solid 2rpx $u-border-color;
    padding: 22rpx;
    .item {
      display: flex;
      font-size: 32rpx;
      line-height: 100rpx;
      align-items: center;
      border-bottom: solid 2rpx $u-border-color;
      .left {
        width: 180rpx;
      }
      input {
        text-align: left;
      }
    }

    .address {
      padding: 20rpx 0;
      textarea {
        height: 150rpx;
        background-color: #f7f7f7;
        line-height: 60rpx;
        margin: 40rpx auto;
        padding: 20rpx;
      }
    }
    .site-clipboard {
      padding-right: 40rpx;
      textarea {
        height: 150rpx;
        background-color: #f7f7f7;
        line-height: 60rpx;
        margin: 40rpx auto;
        padding: 20rpx;
      }
      .clipboard {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26rpx;
        color: $u-tips-color;
        height: 80rpx;
        .icon {
          margin-top: 6rpx;
          margin-left: 10rpx;
        }
      }
    }
    .defult {
      display: flex;
      margin: 20rpx 0;
      padding: 20rpx 0;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #edeff4;
    }
    .btns {
      display: flex;
      position: absolute;
      bottom: 50rpx;
      left: 50%;
      transform: translateX(-50%);
      .btn {
        width: 300rpx;
        margin: 0 20rpx;
      }
    }
  }
}
</style>
