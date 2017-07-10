<template>
	<div class="user-followers-content">
		<!-- 关注用户的人 -->
		<div v-if="loading" class="loading"></div>
		<UserList v-else :list="list"></UserList>
		
		<!-- 分页 -->
		<Pagination :paging="paging" @goto="getList"></Pagination>
	</div>
</template>

<script>
import UserList from '../../components/userList.vue';
import Pagination from '../../components/pagination.vue';

export default {
	props: ['userInfo'],
	components: {
		UserList,
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
		list() {
			// 列表数据更改，则鹰舱loading图标
			this.loading = false;
		}
	},
	methods: {
		getList(url) {
			// 获取用户信息列表
			let _this = this;
			var url = url || `https://api.github.com/users/${_this.$route.params.user}/followers?page=1&per_page=10`;

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
				})
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
		this.getList();
	}
};
</script>