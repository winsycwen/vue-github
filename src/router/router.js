import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '../views/dashboard.vue';
import Repos from '../views/repos.vue';

import User from '../views/user/user.vue';
import UserIndex from '../views/user/userIndex.vue';
import UserRepos from '../views/user/userRepos.vue';
import UserStars from '../views/user/userStars.vue';
import UserFollowers from '../views/user/userFollowers.vue';
import UserFollowing from '../views/user/userFollowing.vue';

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
			path: '/:user/:repos',
			component: Repos
		}
	]
});