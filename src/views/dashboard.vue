<template>
	<div class="content dashboard">
		<!-- 头部内容 -->
		<Navbar></Navbar>

		<!-- 搜索栏 -->
		<form class="search-bar">
			<input type="text" placeholder="Search Github">
		</form>

		<!-- 参与的仓库 -->
		<section class="repos-contribute repos">
			<h2 class="title">Repositories you contribute to</h2>

			<div v-if="loadingA" class="loading"></div>
			<ReposList v-else :list="reposContribute"></ReposList>
		</section>

		<!-- 收藏的仓库 -->
		<section class="repos-starred repos">
			<h2 class="title">Starred Repositories</h2>

			<div v-if="loadingB" class="loading"></div>
			<ReposList v-else :list="reposStarred"></ReposList>
		</section>
	</div>
</template>

<script>
import Navbar from '../components/navbar.vue';
import ReposList from '../components/reposList.vue';

export default {
	components: {
		Navbar,
		ReposList
	},
	data() {
		return {
			loadingA: true,
			loadingB: true,
			reposContribute: [],
			reposStarred: []
		};
	},
	watch: {
		reposContribute() {
			this.loadingA = false;
		},
		reposStarred() {
			this.loadingB = false;
		}
	},
	methods: {
		/**
		 *	获取用户参与的仓库信息
		 **/
		getReposContribute() {
			var _this = this,
				url = 'https://api.github.com/users/winsycwen/repos';

			_this.$http
				.get(url, {
					params: {
						page: 1,
						per_page: 3,
						sort: 'pushed',
						direction: 'desc'
					}
				})
				.then(response => {
					_this.reposContribute = response.body;
				}, response => {
					alert(response.statusText);
				});
			
		},
		/**
		 *	获取用户收藏的仓库信息
		 **/
		getReposStarred() {
			var _this = this,
				url = 'https://api.github.com/users/winsycwen/starred';

			_this.$http
				.get(url, {
					params: {
						page: 1,
						per_page: 10
					}
				})
				.then(response => {
					_this.reposStarred = response.body;
				}, response => {
					alert(response.statusText);
				});
		}
	},
	created() {
		this.getReposContribute();
		this.getReposStarred();
	}
};
</script>

<style lang="scss">
@import '../assets/fonts/fonts.scss';
@import '../assets/css/mixins.scss';

.dashboard {
	// 搜索栏
	.search-bar {
		margin: 15px 15px 0;
		input {
			width: 100%;
			height: 34px;
			padding: 6px 8px;
			box-sizing: border-box;
			border: 1px solid $border-color;
			border-radius: 3px;
			outline: none;
			&:focus {
				border-color: #2188ff;
				box-shadow: inset 0 1px 2px rgba(27,31,35,0.075), 0 0 0 0.2em rgba(3,102,214,0.3);
			}
		}
	}

	// 仓库信息
	.repos {
		margin: 15px 15px 0;
		border: 1px solid $border-color;
		border-radius: 3px;
		background-color: #fff;
		.title {
			height: 40px;
			margin: 0;
			padding-left: 15px;
			border-bottom: 1px solid $border-color;
			line-height: 40px;
			font-size: 14px;
			color: #2f363d;
		}
	}

	.repos-starred {
		margin-bottom: 15px;
		.title:before {
			margin-right: 8px;
			font-size: 14px;
			color: $font-gray;
			@extend .icon-star;
		}
	}
}
</style>