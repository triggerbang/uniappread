<template>
  <view class="container"> </view>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      // 订单编号
      orderId: "",
      // 订单列表
      orderList: [],
      // 订单详情
      orderDetail: {},
    };
  },
  onLoad(options) {
    // 保存订单号
    const { orderId } = options;
    this.orderId = orderId;
    // 获取支付二维码
    this.getPayQRcode();
    // 订单相关获取数据
    // this.getOrderList();
    // this.checkOrderDetail();
  },
  methods: {
    // 获取订单列表
    async getOrderList() {
      const res = await this.$u.api.checkOrderList();
      console.log(res, "订单列表");
    },
    // 获取订单详情
    async checkOrderDetail() {
      const res = await this.$u.api.checkOrderDetail(this.orderId);
      console.log(res, "订单详情");
    },
    // 获取订单支付二维码
    async getPayQRcode() {
      const res = await this.$u.api.getPayQRcode(this.orderId);
      console.log(res, "支付二维码");
    },
  },
};
</script>

<style lang="scss" scoped></style>
