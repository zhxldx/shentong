<template>
	<iframe :src="src" style="display: none;"></iframe>
</template>
<script>
	export default {
		props: ['title'],
		data() {
			return {
				src: ''
			}
		},
		ready() {
			document.title = this.title;
			// 判断是否为ios设备，ios设备需要通过加载iframe来刷新title
			if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
				this.src = './favicon.ico' + Math.random();
			}
		}
	}
</script>