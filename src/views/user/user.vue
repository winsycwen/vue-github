<template>
	<div class="content">
		<Navbar :navList="navList"></Navbar>

		<router-view :userInfo="userInfo"></router-view>
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
			userInfo: {}
		};
	},
	beforeRouteEnter(to, from, next) {
		if(!to.params) {
			// 错误提示
			alert('获取数据失败');

			next('/');
		}

		next(vm => {
			let url = `https://api.github.com/users/${to.params.user}`;

			vm.$http.get(url)
				.then(response => {
					let data = response.body;
					let {
						public_repos: repos, 
						followers, 
						following
					} = data;
					let subPath = `/user/${data.name}`;

					// 设置用户页面信息
					vm.userInfo = data;

					// 设置头部子菜单链接
					vm.navList = [{
						link: `${subPath}`,
						title: 'Overview',
						num: ''
					}, {
						link: `${subPath}/repos`,
						title: 'Repositories',
						num: repos
					}, {
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
					}];
				}, response => {
					// 获取数据出错，返回原来的路由

					alert(response.statusText);

					next(false);
				});
		});

	}
};
</script>