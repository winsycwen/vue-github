<template>
	<div class="content">
		<router-view :navList="navList"></router-view>

		<!-- 用户信息 -->
		<section class="user-info">
			<img class="avatar" :src="userInfo.avatar_url">
		</section>

		<!-- 用户仓库信息 -->
		<section class="user-repos"></section>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			navList: [],
			userInfo: {}
		};
	},
	beforeRouteEnter(to, from, next) {
		if(!to.params) {
			next(false);

			// 错误提示
			alert('获取数据失败');
		}

		let user = to.params.user,
			url = 'https://api.github.com/users/' + user,
			that = this;
		
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
					let data = JSON.parse(xhr.responseText);
					let {
						public_repos: repos, 
						followers, 
						following
					} = data;

					next(vm => {
						vm.userInfo = data;
						vm.navList = [{
							link: '/profile',
							title: 'Overview',
							num: ''
						}, {
							link: '/profile',
							title: 'Repositories',
							num: repos
						}, {
							link: '/profile',
							title: 'Stars',
							num: ''
						}, {
							link: '/profile',
							title: 'Follwers',
							num: followers
						}, {
							link: '/profile',
							title: 'Following',
							num: following
						}];
					});
				} else {
					next(false);
					alert('Get message error');
				}
			}
		};
		xhr.open('get', url, true);
		xhr.send(null);
	}
};
</script>

<style lang="scss" scoped>
.user-info {
}
.avatar {
	width: 110px;
	height: 110px;
	vertical-align: middle;
}
</style>