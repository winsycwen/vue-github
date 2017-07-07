<template>
	<div class="user-repos-content">
		<!-- 仓库信息 -->
		<div v-if="loading" class="loading"></div>
		<UserReposList v-else :list="list"></UserReposList>

		<!-- 分页 -->
		<Pagination @goto="getReposByPages"></Pagination>
	</div>
</template>

<script>
import UserReposList from '../../components/userReposList.vue';
import Pagination from '../../components/pagination.vue';

export default {
	props: ['userInfo'],
	components: {
		UserReposList,
		Pagination
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
						sort: 'updated',
						page: 1,
						per_page: 2
					}
				})
				.then(response => {
					console.log(response.headers);
					console.log(response.headers.map['Link'][0]);
					_this.list = response.body;
				}, response => {
					alert(response.statusText);
				});
		},
		getReposByPages() {
			console.log("触发事件");
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