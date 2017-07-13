<template>
	<ul v-if="list.length" class="component-repos-list">
		<li class="item" v-for="item in list">
			<router-link class="link clearfix" :to="item.full_name | formatUrl">
				<span :class="[item.fork ? 'fork-icon' : 'repos-icon']"></span>
				<span class="repos-name">{{item.full_name}}</span>
				<span class="star-icon">{{item.stargazers_count | formatNum}}</span>
			</router-link>
		</li>
	</ul>
	<p v-else class="component-repos-list-empty">No message to show.</p>
</template>

<script>
export default {
	props: ['list'],
	filters: {
		// 格式化跳转链接
		formatUrl(value) {
			if(!value || value.indexOf('/') == -1) {
				return 'javascript:void(0);';
			}
			var arr = value.split('/');
			return `/userrepos/${arr[0]}/repos/${arr[1]}`;
		},
		// 格式化数字为以k为单位的字符串
		formatNum(value) {
			if(!value) {
				return value;
			}

			return parseInt(value) >= 1000 ? (value / 1000).toFixed(1) + 'k' : value;
		}
	}
};
</script>

<style lang="scss">
@import '../assets/css/mixins.scss';
@import '../assets/fonts/fonts.scss';
.component-repos-list {
	.item {
		padding: 14px;
		&+.item {
			border-top: 1px solid $border-color;
		}
	}
	.link {
		color: $font-blue;
	}

	.repos-icon,
	.fork-icon {
		display: inline-block;
		&:before {
			margin-right: 4px;
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
	.repos-name {
		display: inline-block;
		max-width: 75%;
		word-break: break-all;
	}
	.star-icon {
		float: right;
		color: $font-gray;
		&:after {
			margin-left: 3px;
			font-size: 14px;
			@extend .icon-star;
		}
	}
}
.component-repos-list-empty {
	padding: 45px;
	text-align: center;
	color: #586069;
}
</style>