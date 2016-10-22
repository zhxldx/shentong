<template>
	<div v-if="false"></div>
</template>
<script>
	export default {
		props: {
			title: String
		},
		ready() {
			document.title = this.title;
			// 判断是否为ios设备，ios设备需要通过加载iframe来刷新title
			if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
				var $body = $('body');
				var $iframe = $('<iframe src="/favicon.ico"></iframe>');
				$iframe.on('load',function() {
				  setTimeout(function() {
				      $iframe.off('load').remove();
				  }, 0);
				}).appendTo($body);
			}
		}
	}
</script>