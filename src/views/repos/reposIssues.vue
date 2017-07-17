<template>
	<div class="repos-issues-content">
		<!-- Tab切换 -->
		<div class="tab-wrap">
			<div class="tab-nav">
				<span class="nav"
					v-for="item in tabNav"
					:class="{current: currentNav.title == item.title}"
					@click="toggleTab(item)">{{item.title}}</span>
			</div>
			
			<div class="tab-content">
				<div v-if="loading" class="loading"></div>
				<ul class="issues-list"
					v-else
					v-for="item in tabNav"
					:class="{hide: currentNav.title != item.title}">
					<li v-if="issuesList.length" v-for="issue in issuesList" class="issue">
						<div class="title clearfix">
							<a class="link" href="javascript:void(0);">{{issue.title}}</a>
							<span class="floor">#{{issue.number}}</span>
						</div>
						<!-- opened issue时间显示 -->
						<span class="time" v-if="currentNav.title=='Open'">Opened by {{issue.user.login}} {{issue.updated_at | formatTime}}</span>

						<!-- closed issue时间显示 -->
						<span class="time" v-else>
						Closed by {{issue.user.login}} {{issue.closed_at | formatTime}}
						</span>
					</li>
					<li v-if="!issuesList.length">
						<p class="empty">No message to show.</p>
					</li>
				</ul>
			</div>
		</div>

		<!-- 分页 -->
		<Pagination :paging="paging" @goto="getIssues"></Pagination>
	</div>
</template>

<script>
import Pagination from '../../components/pagination.vue';
import {formatTime as format, getPaginationUrl} from 'util';

export default {
	props: ['reposInfo'],
	components: {
		Pagination
	},
	data() {
		return {
			tabNav: [{
				title: 'Open',
				state: 'open'
			}, {
				title: 'Closed',
				state: 'closed'
			}],
			currentNav: {
				title: 'Open',
				state: 'open'
			},
			issuesList: [],
			paging: [],
			loading: true,
		};
	},
	watch: {
		issuesList() {
			// 列表数据更改，则隐藏loading图标
			this.loading = false;
		}
	},
	methods: {
		toggleTab(item) {
			this.currentNav = item;
			this.getIssues();
		},
		getIssues(url) {
			var state = this.currentNav.state || 'open',
				url = url || `https://api.github.com/repos/${this.$route.params.user}/${this.$route.params.name}/issues?state=${state}&page=1&per_page=10`;
			let _this = this;
			
			_this.loading = true;
			_this.paging = [];

			_this.$http.get(url)
				.then(response => {
					var headers = response.headers.map;

					if(headers['Link']) {
						// 分页信息
						_this.paging = getPaginationUrl(headers['Link'][0]);
					}

					// 列表信息
					_this.issuesList = response.body;
				}, response => {
					// 获取数据出错，返回原来的路由

					alert(response.statusText);
				});
		}
	},
	filters: {
		formatTime(val) {
			if(!val) {
				return val;
			}
			return format(val);
		}
	},
	created() {
		this.getIssues();
	}
};
</script>

<style lang="scss">
@import '../../assets/css/mixins.scss';

.repos-issues-content {
	// Tab切换
	.tab-nav {
		display: table;
		width: 100%;
		height: 40px;
		line-height: 40px;
		table-layout: fixed;
		.nav {
			display: table-cell;
			border-bottom: 1px solid $border-color;
			text-align: center;
			color: $font-blue;
			background-color: $bg-color;
		}
		.current {
			border-left: 1px solid $border-color !important;
			border-right: 1px solid $border-color !important;
			border-bottom: none;
			color: #000;
			background-color: #fff;
			&:first-child {
				border-left: none;
			}
			&:last-child {
				border-right: none;
			}
		}
	}
	.tab-content {
		background-color: #fff;
		.issue {
			padding: 15px;
			border-bottom: 1px solid $border-color;
			&:last-child {
				border-bottom: none;
			}
		}
		.title {
			.link {
				float: left;
				width: 86%;
				color: $font-blue;
				word-wrap: break-word;
			}
			.floor {
				float: right;
				font-size: 12px;
				color: $font-gray;
			}
		}
		.time {
			font-size: 12px;
			color: $font-gray;
		}

		// 没有内容
		.empty {
			margin: 0;
			padding: 45px;
			text-align: center;
			color: #586069;
		    background-color: #fff;
		}
	}
}
</style>