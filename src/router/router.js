import Vue from 'vue';
import VueRouter from 'vue-router';

// 首页
import Dashboard from '../views/dashboard/dashboard.vue';

// 用户相关页
import User from '../views/user/user.vue';
import UserIndex from '../views/user/userIndex.vue';
import UserRepos from '../views/user/userRepos.vue';
import UserStars from '../views/user/userStars.vue';
import UserFollowers from '../views/user/userFollowers.vue';
import UserFollowing from '../views/user/userFollowing.vue';

// 仓库相关页
import Repos from '../views/repos/repos.vue';
import ReposIndex from '../views/repos/reposIndex.vue';
import ReposIssues from '../views/repos/reposIssues.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Dashboard
		}, {
			path: '/user/:user',
			component: User,
			children: [
				{
					path: '',
					component: UserIndex
				}, {
					path: 'repos',
					component: UserRepos
				}, {
					path: 'stars',
					component: UserStars
				}, {
					path: 'followers',
					component: UserFollowers
				}, {
					path: 'following',
					component: UserFollowing
				}
			]
		}, {
			path: '/userrepos/:user/repos/:name',
			component: Repos,
			children: [
				{
					path: '',
					component: ReposIndex
				}, {
					path: 'issues',
					component: ReposIssues
				}
			]
		}
	]
});