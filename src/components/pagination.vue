<template>
	<div class="component-pagination">
		<a class="prev" href="javascript:void(0);" @click="go">Previous</a>
		<a class="next" href="javascript:void(0);" @click="go">Next</a>
	</div>
</template>

<script>
export default {
	methods: {
		go() {
			this.$emit('goto');
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