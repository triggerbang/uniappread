<template>
	<view class="wrap">
	<u-swiper :list="slides" name="img_url" height="320"></u-swiper>
 <view class="u-text-center u-m-t-30" > 
 <u-tabs :list="sortList" bar-width="100" item-width="160" :current="current" @change="changeSort"></u-tabs>
 </view>
 <u-row gutter="16" class="u-skeleton">
 			<u-col span="6" v-for="(book,index) in goods">
      <!--使用组件-->
        <goods-card :book="book"></goods-card>
 			</u-col>
 			<u-col >
 				<view ></view>
 			</u-col>
 		</u-row>
    <!--加载动画 不推荐 -->
    <!--骨架屏 -->
    <u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
        sortList:[
         {name: '默认'}, 
         {name: '销量'},
         {name: '推荐'},
         {name: '最新'},
        ],
      	current: 0,
        slides:[],
        goods:[{},{},{},{}],
        page:1,
        loading:false
		}
    },
		 onLoad() {
      this.getData()
      },
      //post测试
   // const res = await this.$u.post('/api/auth/wx/bind')
   //   console.log(res)
   //集中管理api
   // const res = await this.$u.api.index()
   // console.log(res)
   //测试 vuex
   // console.log(this.vuex_version)
   // //this.$u.vuex('vuex_name','Tom')
   // console.log(this.vuex_name)
		methods: {
    changeSort(index){
      this.current = index;
      //重置商品数据和分页
      this.goods = [{},{},{},{}]
      this.page = 1
   
    this.getData()
		},
    //获取数据
   async getData(){
     this.loading = true //显示骨架屏
     const params = {
       page: this.page
     }
      //判断筛选条件
     if(this.current == 1)params.sales = 1
     if(this.current == 2)params.recommend = 1
     if(this.current == 3)params.new = 1
      const  res = await this.$u.api.index(params)
      this.loading = false
        this.slides = res.slides
        this.goods = this.goods.pop().title?[...this.goods,...res.goods.data]:res.goods.data
        
    }
    },
    onReachBottom() {
      //重新请求数据，带上分页参数
      this.page = this.page+1
      this.getData()
    }
	}
</script>

<style lang="scss" scoped>

</style>
