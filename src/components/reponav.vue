<template>
	<ul class="repo-nav">
		<li class="nav" v-for="item in navList">
			<router-link class="title" :to="item.link">{{item.title}}</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	data: () => {
		return { 
			navList: [{
				link: '/',
				title: 'Dashboard'
			}, {
				link: '/profile',
				title: 'Profile'
			}]
		};
	}
};
</script>

<style lang="scss">
.repo-nav {
	display: flex;
	justify-content: center;
	width: 100%;
	height: 36px;
	line-height: 36px;
	background-color: #1e2327;
	.nav {
		margin-right: 15px;
	}
	.title {
		color: rgba(255, 255, 255, .75);
	}
	.router-link-exact-active {
		color: #fff;
	}
}
</style>