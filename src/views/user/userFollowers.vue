<template>
	<div class="user-followers-content">
		<div v-if="loading" class="loading"></div>
		<ul v-else class="component-user-list">
			<li class="item" v-for="item in list">
				
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['userInfo'],
	data() {
		return {
			loading: true,
			list: []
		};
	},
	watch: {
		list() {
			// 列表数据更改，则鹰舱loading图标
			this.loading = false;
		}
	},
	methods: {
		getList() {
			// 获取用户信息列表
			let _this = this,
				url = `https://api.github.com/users/${_this.$route.params.user}/followers`;

			_this.$http
				.get(url, {
					params: {
						page: 1,
						per_page: 10
					}
				})
				.then(response => {
					console.log(response.headers);
					_this.list = response.body;
				}, response => {
					alert(response.statusText);
				})
		}
	},
	created() {
		this.getList();
	}
};
</script>