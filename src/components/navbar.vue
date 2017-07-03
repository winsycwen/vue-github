<template>
	<header class="nav-bar">
		<div class="logo">
			<router-link class="logo-link" to="/"></router-link>
		</div>

		<div class="menu-logo" @click="hide = !hide">
			<span class="line"></span>
		</div>

		<ul class="menu-list" v-bind:class="{hide: hide}">
			<li class="list-item" v-for="item in menuList">
				<router-link class="title" :to="item.link">{{item.title}}</router-link>
			</li>
		</ul>

		<ul v-if="navList" class="repo-nav">
			<li class="nav" v-for="item in navList">
				{{item.title}}<span class="num" v-if="item.num">{{item.num}}</span>
			</li>
		</ul>
	</header>
</template>

<script lang="js">
export default {
	props: ['navList'],
	data: () => {
		return {
			hide: true,
			menuList: [{
				link: '/',
				title: 'Dashboard'
			}, {
				link: '/profile/winsycwen',
				title: 'Profile'
			}]
		};
	}
};
</script>

<style lang="scss" scoped>
@import '../assets/fonts/fonts.scss';
.nav-bar {
	position: relative;
	width: 100%;
	line-height: 50px;
	background-color: #1e2327;
	// 页面logo
	.logo {
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
	}
	.logo-link {
		display: inline-block;
		vertical-align: middle;
		&:after {
			width: 32px;
			height: 32px;
			font-size: 32px;
    		color: #fff;
			@extend .icon-github;
		}
	}

	// 菜单按钮logo
	.menu-logo {
		position: relative;
		display: inline-block;
		width: 44px;
		height: 14px;
		vertical-align: middle;
		&:before, &:after {
			content: '';
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
			width: 18px;
			height: 2px;
			background-color: #c7c8c9;
		}
		&:before {
			top: 0;
		}
		&:after {
			bottom: 0;
		}
		.line {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 18px;
			height: 2px;
			background-color: #c7c8c9;
		}
	}

	// 下拉菜单
	.menu-list {
		position: absolute;
    	width: 100%;
		padding: 7px 0;
		background-color: #1e2327;
		.list-item {
			margin: 0 13px;
			line-height: 38px;
		}
		.title {
			display: block;
			color: rgba(255, 255, 255, .75);
		}
	}

	// 子导航
	.repo-nav {
		padding: 0 7px;
		height: 36px;
		line-height: 36px;
		background-color: #1e2327;
		overflow-x: scroll;
		white-space: nowrap;
		.nav {
			display: inline-block;
			margin-right: 15px;
			color: rgba(255, 255, 255, .75);
		}
		.title {
			color: rgba(255, 255, 255, .75);
		}
		.num {
			display: inline-block;
			width: 20px;
			height: 20px;
			border-radius: 20px;
			background-color: rgba(255, 255, 255, .15);
    		font-size: 12px;
    		line-height: 20px;
    		text-align: center;
		}
		.router-link-exact-active {
			color: #fff;
		}
	}
}	
</style>