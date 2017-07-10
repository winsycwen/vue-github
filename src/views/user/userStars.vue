<template>
	<div class="user-stars-content">
		<!-- 仓库信息 -->
		<div v-if="loading" class="loading"></div>
		<UserReposList v-else :list="list"></UserReposList>

		<!-- 分页 -->
		<Pagination :paging="paging" @goto="getReposStarred"></Pagination>
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
			list: [],
			paging: []
		};
	},
	watch: {
		// 读取到列表数据，则隐藏loading图标
		list() {
			this.loading = false;
		}
	},
	methods: {
		// 获取用户收藏的仓库信息
		getReposStarred(url) {
			let _this = this;
			var url = url || `https://api.github.com/users/${_this.$route.params.user}/starred?page=1&per_page=10`;

			_this.loading = true;
			_this.paging = [];

			_this.$http
				.get(url)
				.then(response => {
					var headers = response.headers.map;

					if(headers['Link']) {
						// 分页信息
						_this.paging = _this.getPaginationUrl(headers['Link'][0]);
					}
					
					// 列表信息
					_this.list = response.body;

				}, response => {
					alert(response.statusText);
				});
		},
		// 根据响应请求的自定义Link头部内容，获取翻页信息
		getPaginationUrl(info) {
			let arr = [];
			info.split(',').forEach(function(item, index, array) {
				var result = item.match(/<(.*?)>;[ ]+rel="(.*?)"/);
				arr[result[2]] = result[1];
			});
			return arr;
		}
	},
	created() {
		this.getReposStarred();
	}
};
</script>

<style lang="scss">
.user-stars-content {
	background-color: #fff;
}
</style>