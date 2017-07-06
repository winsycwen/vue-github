<template>
	<div class="user-repos-content">
		<div v-if="loading" class="loading"></div>
		<UserReposList v-else :list="list"></UserReposList>
	</div>
</template>

<script>
import UserReposList from '../../components/userReposList.vue';

export default {
	props: ['userInfo'],
	components: {
		UserReposList
	},
	data() {
		return {
			loading: true,
			list: []
		};
	},
	watch: {
		list() {
			// 读取到列表数据，则隐藏loading图标
			this.loading = false;
		}
	},
	methods: {
		getRepos() {
			// 获取用户仓库信息
			let _this = this,
				url = `https://api.github.com/users/${_this.$route.params.user}/repos`;

			_this.$http
				.get(url, {
					params: {
						sort: 'updated'
					}
				})
				.then(response => {
					_this.list = response.body;
				}, response => {
					alert(response.statusText);
				});
		}
	},
	created() {
		this.getRepos();
	}
};
</script>

<style lang="scss">
.user-repos-content {
	background-color: #fff;
}
</style>