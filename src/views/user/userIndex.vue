<template>
	<div class="user-index-content">
		<!-- 用户信息 -->
		<section class="user-info clearfix">
			<div class="avatar-wrap">
				<img class="avatar" :src="userInfo.avatar_url">
			</div>
		
			<div class="detail-info">
				<p class="name">{{userInfo.name}}</p>
				<p class="account">{{userInfo.login}}</p>
				<p class="location">{{userInfo.location}}</p>
			</div>
		</section>

		<!-- 用户仓库信息 -->
		<section class="user-repos">
			<h2 class="title">Popular repositories</h2>
			
			<div class="wrapper">
				<div v-if="loading" class="loading"></div>
				<ReposList v-else :list="list"></ReposList>
			</div>
		</section>
	</div>
</template>

<script>
import ReposList from '../../components/reposList.vue';
export default {
	props: ['userInfo'],
	components: {
		ReposList
	},
	data() {
		return {
			loading: true,
			list: []
		};
	},
	watch: {
		list() {
			// 数据更改，隐藏loading图标
			this.loading = false;
		}
	},
	methods: {
		getRepos() {
			// 获取用户仓库信息
			let _this = this,
				url = `https://api.github.com/users/${_this.$route.params.user}/repos`;

			_this.$http.get(url)
				.then(response => {
					_this.list = response.body.slice(0, 6);
				}, response => {
					alert(response.statusText);
				});
		}
	},
	created() {
		this.getRepos();
	}
};
</script>

<style lang="scss">
@import '../../assets/css/mixins.scss';
@import '../../assets/fonts/fonts.scss';
.user-index-content {
	// 用户信息
	.user-info {
		padding: 15px;
		// 头像信息
		.avatar-wrap {
			float: left;
			margin-right: 15px;
		}
		.avatar {
			width: 110px;
			height: 110px;
			vertical-align: middle;
		}
		// 用户信息
		.detail-info {
			float: left;
		}
		.name, .account, .location {
			margin: 0;
		}
		.name {
			font-size: 16px;
			font-weight: bold;
		}
		.account {
			margin-top: 5px;
			color: #586069;
			font-size: 12px;
		}
		.location {
			margin-top: 15px;
			&:before {
				font-size: 12px;
				display: inline-block;
				color: #586069;
				@extend .icon-location;
			}
		}
	}

	// 用户仓库信息
	.user-repos {
		padding: 0 15px 15px;
		border-top: 1px solid #e1e4e8;
		background-color: #fff;
		.title {
			font-size: 16px;
			font-weight: normal;
		}
		.wrapper {
			border: 1px solid $border-color;
			border-radius: 3px;
		}
	}
}
</style>