<template>
	<ul v-if="list.length" class="component-user-followers-list">
		<li class="item clearfix" v-for="item in list">
			<div class="avatar-wrap">
				<router-link :to="item.login | formatUrl">
					<img :src="item.avatar_url | concatSize" class="avatar">
				</router-link>
			</div>

			<div class="detail-info">
				<router-link class="user" :to="item.login | formatUrl">
					<span class="name">{{item.login}}</span>
				</router-link>
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
	}
}
</style>