<template>
	<div class="repos-index-content">
		<!-- 仓库简要信息 -->
		<div v-if="reposInfo.description" class="repos-meta">
			<p class="description">{{reposInfo.description}}</p>
			<a class="link" :href="reposInfo.homepage">{{reposInfo.homepage}}</a>
		</div>

		<!-- 收藏和关注 -->
		<div class="bubble">
			<div class="bubble-btn">
				<a href="javascript:void(0);" class="btn star">
					<i class="title">Star</i>
					<i class="num">{{reposInfo.stargazers_count || 0}}</i></span>
				</a>
				<a href="javascript:void(0);" class="btn watch">Watch</a>
			</div>
		</div>

		<!-- 仓库信息 -->
		<div class="bubble">
			<div class="bubble-wrap">
				<div class="bubble-title">
					<h2>{{reposInfo.default_branch}}</h2>
				</div>
				<div class="content">
					<p>Latest commit by {{reposInfo.login}} {{reposInfo.pushed_at | formatTime}}</p>
				</div>
			</div>
			<div class="bubble-btn">
				<a class="btn" href="javascript:void(0);">View code</a>
				<a class="btn" href="javascript:void(0);">Jump to file</a>
			</div>
		</div>

		<!-- README.MD -->
		<div class="bubble">
			<div class="bubble-wrap">
				<div class="bubble-title">
					<h2>README.md</h2>
				</div>
				<div class="content">hello world</div>
			</div>
			<div class="bubble-btn">
				<a class="btn" href="javascript:void(0);">View all of README.md</a>
			</div>
		</div>

		<!-- issues信息 -->
		<div class="bubble">
			<div class="bubble-wrap">
				<div class="bubble-title">
					<h2>Issues</h2>
				</div>
				<div class="content">To do list</div>
			</div>
			<div class="bubble-btn">
				<a href="javascript:void(0);" class="btn">View all issues</a>
			</div>
		</div>
	</div>
</template>

<script>
import {formatTime as format} from 'util';
export default {
	props: ['reposInfo'],
	filters: {
		formatTime(val) {
			if(!val) {
				return val;
			}
			return format(val);
		}
	}
};
</script>

<style lang="scss">
@import '../../assets/css/mixins.scss';
@import '../../assets/fonts/fonts.scss';

.repos-index-content {
	padding: 15px;
	
	// 仓库简要信息
	.repos-meta {
		margin-bottom: 15px;
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

	.bubble {
		margin-bottom: 15px;
		background-color: #fff;
		.bubble-wrap {
			border: 1px solid $border-color;
			border-bottom: none;
			.content {
				padding: 15px;
			}
			.content p {
				margin: 0;
				font-size: 12px;
				color: $font-gray;
			}
		}
		.bubble-title {
			padding-left: 15px;
			border-bottom: 1px solid $border-color; 
			height: 40px;
			line-height: 40px;
			h2 {
				margin: 0;
				font-weight: normal;
				font-size: 14px;
				&:before {
					color: $font-gray;
					@extend .icon-fork;
				}
			}
		}
		.bubble-btn {
			display: flex;
			border: 1px solid $border-color;
			height: 40px;
			line-height: 40px;
			.btn {
				display: block;
				flex: 1;
				text-align: center;
				color: $font-blue;
				&:first-child {
					border-right: 1px solid $border-color;
				}
			}
		}
	}

	// 收藏和关注
	.bubble-btn {
		.star:before {
			display: inline-block;
			margin-right: 4px;
			font-size: 12px;
			color: $font-blue;
			@extend .icon-star;
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