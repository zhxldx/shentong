<template>
	<div class="compoent-text-card-note bt bb mt20 bg-white">
		<div class="grid fs-black pt20">
			{{title}}
		    <textarea class="pt20" :placeholder="placeholder" v-model="value"></textarea>
		</div>
	</div>
</template>
<script>
    export default {
    	props: {
    		title: String,
    		placeholder: String,
    		value: String
    	}
    }
</script>
<style lang="less">
    @import '~src/styles/mixin.less';
    .compoent-text-card-note {
        textarea {
        	font-size: @fs30;
        	width: 100%;
            height: 2.66666667rem; // 200px
            padding: .26666667rem 0;
            resize: none;
            &::-webkit-input-placeholder {
                color: @c-999999;
            }
        }
    }
</style>