<template>
	<div class="content">
		<Navbar :navList="navList" :navTitle="navTitle"></Navbar>

		<router-view :reposInfo="reposInfo"></router-view>
	</div>
</template>

<script>
import Navbar from '../../components/navbar.vue';

export default {
	components: {
		Navbar
	},
	data() {
		return {
			navList: [],
			navTitle: {
				user: 'loading',
				userLink: 'javascript:void(0);',
				reposName: 'loading',
				reposLink: 'javascript:void(0);'
			},
			reposInfo: {}
		}
	},
	methods: {
		// 获取用户对应仓库的信息
		dealRoute(to, from, next) {
			let _this = this,
				url = `https://api.github.com/repos/${to.params.user}/${to.params.name}`;

			_this.$http.get(url)
				.then(response => {
					let data = response.body;
					let {open_issues} = data;
					let subPath = `/userrepos/${to.params.user}/repos/${to.params.name}`;

					// 保存获取到的信息
					_this.reposInfo = data;

					// 设置头部标题
					_this.navTitle = {
						user: to.params.user,
						userLink: `/user/${to.params.user}`,
						reposName: to.params.name,
						reposLink: subPath
					};

					// 设置头部子菜单链接
					_this.navList = [{
						link: subPath,
						title: 'Code',
						num: ''
					}, {
						link: `${subPath}/issues`,
						title: 'Issues',
						num: open_issues
					}];
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