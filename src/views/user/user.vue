<template>
	<div class="content">
		<Navbar :navList="navList"></Navbar>

		<router-view :userInfo="userInfo"></router-view>
	</div>
</template>

<script>
import Navbar from '../../components/navbar.vue';
import { USERTYPE } from 'const';

export default {
	components: {
		Navbar
	},
	data() {
		return {
			navList: [],
			userInfo: {}
		};
	},
	methods: {
		dealRoute(to, from, next) {
			let _this = this,
				url = `https://api.github.com/users/${to.params.user}`;

			_this.$http.get(url)
				.then(response => {
					let data = response.body;
					let {
						public_repos: repos, 
						followers, 
						following
					} = data;
					let subPath = `/user/${data.login}`;

					// 设置用户页面信息
					_this.userInfo = data;

					// 设置头部子菜单链接
					_this.navList = [{
						link: subPath,
						title: 'Overview',
						num: ''
					}, {
						link: `${subPath}/repos`,
						title: 'Repositories',
						num: repos
					}];
					// Organization组织类型的用户没有下述菜单内容
					if(data.type == USERTYPE) {
						_this.navList.push(...[{
							link: `${subPath}/stars`,
							title: 'Stars',
							num: ''
						}, {
							link: `${subPath}/followers`,
							title: 'Follwers',
							num: followers
						}, {
							link: `${subPath}/following`,
							title: 'Following',
							num: following
						}]);
					}
				}, response => {
					// 获取数据出错，返回原来的路由

					alert(response.statusText);

					next(false);
				});
		}
	},
	beforeRouteEnter(to, from, next) {
		if(!to.params) {
			// 错误提示
			alert('获取数据失败');

			next('/');
		}

		next(vm => {
			vm.dealRoute(to, from, next);
		});

	},
	beforeRouteUpdate(to, from, next) {
		if(!to.params) {
			// 错误提示
			alert('获取数据失败');

			next('/');
		}

		this.dealRoute(to, from, next);
		next();
	}
};
</script>