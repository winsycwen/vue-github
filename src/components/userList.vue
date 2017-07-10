<template>
	<ul v-if="list.length" class="component-user-followers-list">
		<li class="item clearfix" v-for="item in list">
			<div class="avatar-wrap">

				<router-link :to="item.login | formatUrl">
					<img :src="item.avatar_url | concatSize" class="avatar">
				</router-link>
			</div>

			<div class="detail-info">
				<a class="user" href="#">
					<span class="name">{{item.login}}</span>
					<!-- <span class="account">winsycwen</span> -->
				</a>
				<!-- <span class="description">I'm come from China!hello world!hahahahhahahah</span> -->
				<!-- <span class="location">China</span> -->
			</div>
		</li>
	</ul>
	<p v-else class="component-user-followers-list-empty">No message to show.</p>
</template>

<script>
export default {
	props: ['list'],
	filters: {
		concatSize(val) {
			if(!val) return;
			return `${val}&s=64`;
		},
		// 将数据格式化为路由可解析的路径
		formatUrl(val) {
			if(!val) return;
			return `/user/${val}`;
		}
	}
};
</script>

<style lang="scss">
@import '../assets/css/mixins.scss';
@import '../assets/fonts/fonts.scss';

// 用户列表信息
.component-user-followers-list {
	background-color: #fff;
	.item {
		padding: 15px;
		& + .item {
			border-top: 1px solid $border-color;
		}
	}

	// 头像信息
	.avatar-wrap {
		float: left;
		width: 32px;
	}
	.avatar {
		width: 32px;
		height: 32px;
		vertical-align: middle;
	}

	// 用户信息
	.detail-info {
		margin-left: 47px;
	}
	.user {
		display: inline-block;
		font-size: 0;
		.name {
			margin-right: 8px;
			font-size: 14px;
			color: $font-blue;
		}
		.account {
			font-size: 12px;
			color: #444d56;
		}
	}
	.description {
		display: block;
		margin: 8px 0;
		font-size: 12px;
		color: $font-gray;
	}
	.location {
		display: block;
		font-size: 12px;
		color: $font-gray;
		&:before {
			display: inline-block;
			margin-right: 4px;
			font-size: 12px;
			color: #586069;
			@extend .icon-location;
		}
	}
}
</style>