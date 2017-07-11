<template>
	<ul v-if="list.length" class="component-user-repos-list">
		<li class="item" v-for="item in list">
			<div class="repos-title">
				<router-link class="link clearfix" :to="item.full_name | formatUrl">
					<span :class="[item.fork ? 'fork-icon' : 'repos-icon']"></span>

					<span class="repos-name">{{item.full_name}}</span>
				</router-link>
			</div>
			<p class="about">{{item.description}}</p>
			<div class="info">
				<span class="star-icon">{{item.stargazers_count}}</span>
			</div>
		</li>
	</ul>
	<p v-else class="component-user-repos-list-empty">No message to show.</p>
</template>

<script>
export default {
	props: ['list'],
	filters: {
		// 为链接添加前缀分割符'/'
		formatUrl(value) {
			if(!value) {
				return value;
			}
			return '/' + value;
		}
	}
};
</script>

<style lang="scss">
@import '../assets/css/mixins.scss';
@import '../assets/fonts/fonts.scss';
.component-user-repos-list {
	.item {
		padding: 15px;
		& + .item {
			border-top: 1px solid $border-color;
		}
	}

	// 仓库标题
	.link {
		font-size: 0;
	}
	.repos-icon,
	.fork-icon {
		float: left;
		display: inline-block;
		&:before {
			color: $font-gray;
		}
	}
	// 非fork的仓库图标
	.repos-icon:before {
		@extend .icon-repos;
	}
	// fork的仓库图标
	.fork-icon:before {
		@extend .icon-fork;
	}
	.link {
		color: $font-blue;
	}
	.repos-name {
		display: block;
		margin-left: 20px;
		font-size: 14px;
		word-break: break-all;
	}

	// 仓库内容概要
	.about {
		margin: 5px 0 5px 20px;
	    line-height: 16px;
	    font-size: 12px;
		color: $font-gray;
		word-break: break-all;
	}

	.info {
		margin: 10px 0 0 20px;
		font-size: 0;
	}
	// 收藏图标
	.star-icon {
		display: inline-block;
		color: $font-gray;
		font-size: 12px;
		&:before {
			margin-right: 4px;
			font-size: 14px;
			@extend .icon-star;
		}
	}
}

.component-user-repos-list-empty {
	padding: 45px;
	text-align: center;
	color: #586069;
}
</style>