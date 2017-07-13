<template>
	<div class="user-following-content">
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
import {getPaginationUrl} from 'util';

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
			var url = url || `https://api.github.com/users/${_this.$route.params.user}/following?page=1&per_page=10`;

			_this.loading = true;
			_this.paging = [];

			_this.$http
				.get(url)
				.then(response => {
					var headers = response.headers.map;

					if(headers['Link']) {
						// 分页信息
						_this.paging = getPaginationUrl(headers['Link'][0]);
					}

					// 列表信息
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