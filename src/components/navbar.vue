<template>
	<header class="component-nav-bar">
		<div class="bar">

			<div v-if="!navTitle" class="logo">
				<router-link class="logo-link" to="/"></router-link>
			</div>
			<div v-else class="repos-title">
				<router-link class="link" :to="navTitle.userLink">{{navTitle.user}}</router-link>
				<span class="separator">/</span>
				<router-link class="link" :to="navTitle.reposLink">{{navTitle.reposName}}</router-link>
			</div>

			<div class="menu-logo" @click="hide = !hide">
				<span class="line"></span>
			</div>
		</div>

		<ul class="menu-list" v-bind:class="{hide: hide}">
			<li class="list-item" v-for="item in menuList">
				<router-link class="title" :to="item.link">{{item.title}}</router-link>
			</li>
		</ul>

		<ul v-if="navList" class="sub-nav">
			<li class="nav" v-for="item in navList">
				<router-link class="nav-link" :to="item.link">
					<span class="title">{{item.title}}</span>
					<span class="num" v-if="item.num">{{item.num | formatNum}}</span>
				</router-link>
			</li>
		</ul>
	</header>
</template>

<script lang="js">
import { formatNumber } from 'util';

export default {
	props: ['navTitle', 'navList'],
	data: () => {
		return {
			hide: true,
			menuList: [{
				link: '/',
				title: 'Dashboard'
			}, {
				link: '/user/winsycwen',
				title: 'Profile'
			}]
		};
	},
	filters: {
		formatNum(val) {
			return formatNumber(val);
		}
	}
};
</script>

<style lang="scss">
@import '../assets/fonts/fonts.scss';
.component-nav-bar {
	position: relative;
	width: 100%;
	background-color: #1e2327;
	.bar {
		height: 50px;
		line-height: 50px;
	}
	// 页面顶部标题
	.logo,
	.repos-title {
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
	.repos-title {
		width: 100%;
		text-align: -webkit-center;
		.link {
			color: #fff;
			&:first-child:before {
				margin-right: 4px;
				color: rgba(255, 255, 255, .75);
				@extend .icon-repos;
			}
		}
		.separator {
			color: rgba(255, 255, 255, .75);
		}
	}

	// 菜单按钮logo
	.menu-logo {
		position: absolute;
		top: 15px;
		width: 44px;
		height: 14px;
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
	.sub-nav {
		padding: 0 7px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		background-color: #1e2327;
		overflow-x: auto;
		white-space: nowrap;
		.nav {
			display: inline-block;
			margin-right: 15px;
			color: rgba(255, 255, 255, .75);
		}
		.nav-link {
			color: rgba(255, 255, 255, .75);
		}
		.title {
			display: inline-block;
		}
		.num {
			display: inline-block;
			min-width: 20px;
			height: 20px;
			border-radius: 20px;
			background-color: rgba(255, 255, 255, .15);
    		font-size: 12px;
    		line-height: 20px;
		}
		.router-link-exact-active {
			color: #fff;
		}
	}
}	
</style>