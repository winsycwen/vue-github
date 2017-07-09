<template>
	<div v-model="paging.length" class="component-pagination">
		<!-- 上一页 -->
		<a class="prev" :class="{disabled: !paging['prev']}" :data-link="paging['prev']" href="javascript:void(0);" @click="go">Previous</a>

		<!-- 下一页 -->
		<a class="next" :class="{disabled: !paging['next']}" :data-link="paging['next']" href="javascript:void(0);" @click="go">Next</a>

	</div>
</template>

<script>
export default {
	props: ['paging'],
	methods: {
		go(event) {
			// 传递自定义属性data-link的值
			this.$emit('goto', event.target.dataset.link);
		}
	}
};
</script>

<style lang="scss">
@import '../assets/css/mixins.scss';
.component-pagination {
	display: flex;
	height: 40px;
	line-height: 40px;
	background-color: #fafbfc;
	border: 1px solid $border-color;
	.prev,
	.next {
		flex: 1;
		color: #444d56;
		text-decoration: none;
		text-align: center;
	}
	
	.next {
		border-left: 1px solid $border-color;
		float: right;
	}

	.disabled {
		color: #c6cbd1;
	}
}
</style>