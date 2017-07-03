<template>
	<div class="content">
		<router-view :navList="navList"></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			navList: [{
				link: '/'+ this.$route.params.user + '/' + this.$route.params.repos,
				title: 'Code',
				num: ''
			}, {
				link: '/'+ this.$route.params.user + '/' + this.$route.params.repos,
				title: 'Issues',
				num: ''
			}]
		};
	}
};
</script>