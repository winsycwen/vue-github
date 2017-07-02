<template>
	<div class="content">
		<!-- 搜索栏 -->
		<form action="" class="search-bar">
			<input type="text" placeholder="Search Github">
		</form>

		<!-- 参与的仓库 -->
		<section class="repos-contribute repos">
			<h2 class="title">Repositories you contribute to</h2>
			<ul class="list">
				<li class="item" v-for="item in reposContribute">
					<a class="link clearfix" :href="item.html_url">
						<span class="repos-icon"></span>
						<span class="repos-name">{{item.full_name}}</span>
						<span class="star-icon">{{item.stargazers_count}}</span>
					</a>
				</li>
			</ul>
		</section>

		<!-- 收藏的仓库 -->
		<section class="repos-starred repos">
			<h2 class="title">Starred Repositories</h2>
			<ul class="list">
				<li class="item" v-for="item in reposStarred">
					<a class="link clearfix" :href="item.html_url">
						<span class="repos-icon"></span>
						<span class="repos-name">{{item.full_name}}</span>
						<span class="star-icon">{{item.stargazers_count}}</span>
					</a>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			reposContribute: [],
			reposStarred: []
		};
	},
	methods: {
		simpleGet(url, callback) {
			if(url == '' || typeof callback != 'function') {
				return;
			}
			
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4) {
					if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
						callback(xhr.responseText);
					} else {
						alert('Get message error');
					}
				}
			};
			xhr.open('get', url, true);
			xhr.send(null);
		},
		getReposContribute() {
			var that = this,
				url = 'https://api.github.com/users/winsycwen/repos?sort=pushed&direction=asc';

			// 获取用户参与的仓库信息
			that.simpleGet(url, function(data = []) {
				data = JSON.parse(data);
				that.reposContribute = data.slice(data.length - 3);
			});
		},
		getReposStarred() {
			var that = this,
				url = 'https://api.github.com/users/winsycwen/starred';

			// 获取用户收藏的仓库信息
			that.simpleGet(url, function(data = []) {
				data = JSON.parse(data);
				that.reposStarred = data.slice(0, 10);
			});
		}
	},
	created() {
		this.getReposContribute();
		this.getReposStarred();
	}
};
</script>

<style lang="scss" scoped>
@import '../assets/fonts/fonts.scss';
@import '../assets/css/mixins.scss';

.content {
	padding: 15px;
	// 搜索栏
	.search-bar {
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
		margin-top: 15px;
		border: 1px solid $border-color;
		border-radius: 3px;
		background-color: #fff;
		.title {
			height: 40px;
			padding-left: 15px;
			line-height: 40px;
			font-size: 14px;
			color: #2f363d;
		}

		.item {
			padding: 14px;
			border-top: 1px solid $border-color;
		}
		.link {
			color: #0366d6;
		}

		.repos-icon {
			display: inline-block;
		}
		.repos-icon:before {
			margin-right: 4px;
			color: $font-gray;
			@extend .icon-repos;
		}
		.repos-name {
			display: inline-block;
			max-width: 78%;
			word-break: break-word;
		}
		.star-icon {
			float: right;
			color: $font-gray;
		}
		.star-icon:after {
			margin-left: 3px;
			font-size: 14px;
			@extend .icon-star;
		}
	}

	.repos-starred {
		.title:before {
			margin-right: 8px;
			font-size: 14px;
			color: $font-gray;
			@extend .icon-star;
		}
	}
}
</style>