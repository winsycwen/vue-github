import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '../views/dashboard.vue';
import Repos from '../views/repos.vue';

import Profile from '../views/profile/profile.vue';
import ProfileIndex from '../views/profile/profileIndex.vue';
import ProfileRepos from '../views/profile/profileRepos.vue';
import ProfileStars from '../views/profile/profileStars.vue';
import ProfileFollowers from '../views/profile/profileFollowers.vue';
import ProfileFollowing from '../views/profile/profileFollowing.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Dashboard
		}, {
			path: '/profile/:user',
			component: Profile,
			children: [
				{
					path: '',
					component: ProfileIndex
				}, {
					path: 'repos',
					component: ProfileRepos
				}, {
					path: 'stars',
					component: ProfileStars
				}, {
					path: 'followers',
					component: ProfileFollowers
				}, {
					path: 'following',
					component: ProfileFollowing
				}
			]
		}, {
			path: '/:user/:repos',
			component: Repos
		}
	]
});