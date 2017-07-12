<template>
	<div class="repos-index-content">
		<!-- 仓库简要信息 -->
		<div class="repos-meta">
			<p class="description">{{reposInfo.description}}</p>
			<a class="link" :href="reposInfo.homepage">{{reposInfo.homepage}}</a>
		</div>

		<!-- 收藏和关注 -->
		<div class="bubble-wrap">
			<span class="star">
				<i class="title">Star</i>
				<i class="num">{{reposInfo.stargazers_count}}</i></span>
			<span class="watch">Watch</span>
		</div>

	</div>
</template>

<script>
export default {
	props: ['reposInfo']
};
</script>

<style lang="scss">
@import '../../assets/css/mixins.scss';
@import '../../assets/fonts/fonts.scss';

.repos-index-content {
	padding: 15px;
	
	// 仓库简要信息
	.repos-meta {
		.description {
			margin: 0;
			font-size: 14px;
			color: $font-gray;
		}
		.link {
			font-size: 14px;
			color: $font-blue;
			word-wrap: break-word;
		}
	}

	// 收藏和关注
	.bubble-wrap {
		display: flex;
		margin-top: 15px;
		height: 40px;
		line-height: 40px;
		border: 1px solid $border-color;
		background-color: #fff;
		.star {
			border-right: 1px solid $border-color;
			&:before {
				display: inline-block;
				margin-right: 4px;
				font-size: 12px;
				color: $font-blue;
				@extend .icon-star;
			}
		}
		.star,
		.watch {
			display: block;
			flex: 1;
			text-align: center;
			color: $font-blue;
		}
		.title {
			display: inline-block;
			font-style: normal;
		}
		.num {
			display: inline-block;
			height: 20px;
			min-width: 20px;
			line-height: 20px;
			border-radius: 20px;
			color: $font-gray;
			font-style: normal;
			background-color: rgba(27, 31, 35, .08);
		}
	}
}
</style>