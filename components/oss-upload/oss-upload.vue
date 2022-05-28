<template>
<u-upload :action="action" 
:max-size="5 * 1024 * 1024" max-count="6"
:before-upload="beforeUpload"
:multiple="false"
:custom-btn="true"
:form-data="formData"
@on-success="uploadSuccess"
>
<u-avatar slot="addBtn" :src="vuex_user.avatar_url" size="140"></u-avatar>

</u-upload>

</template>

<script>
	let _this = {}
	export default {
		name:"oss-upload",
		data() {
			return {
				action:"",
				formData:{},
				picKey: ""
			};
		},
		created() {
			// 重新绑定组件实例为_this对象
			_this = this
		},
		methods:{
			// 头像上传前回调
			async beforeUpload(index, list) {
			   /* 请求api，获取toekn*/
			  let ossToken = await _this.$u.api.authOssToken()
               //设置上传域名
               _this.action = ossToken.host			
				// 处理生成一个随机的图片名称(分H5和其他平台条件编辑书写)
				// #ifdef H5
				const picName = _this.$u.guid(20) + "." + list[0].file.name.split(".")[1];
				// #endif
				
				// #ifndef H5
				const picName = _this.$u.guid(20) + "." + list[0].file.path.split(".")[1];
				// #endif
				// 存储图片的Key
				_this.picKey = picName;
			//额外的上传参数
			_this.formData={
				'key':picName,//上传后的文件ming
				'policy':ossToken.policy,
				'OSSAccessKeyId':ossToken.accessid,
				'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
				'signature':ossToken.signature,
			}
		 return true;
		},
		// 头像上传成功回调
		async uploadSuccess() {
			// 整理参数
			const params = {
				avatar: _this.picKey
			};
			// 提交上传头像
			await _this.$u.api.uploadUserAvatar(params);
			// 提示成功，用户在表单页点击保存按钮再同步头像信息
			_this.$u.toast("上传成功");
		}
		}
	}
</script>

<style>

</style>