import Vue from 'vue';
import VueRouter from 'vue-router';

// 公用头部
import Navbar from '../components/navbar.vue';

import Dashboard from '../views/dashboard.vue';
import Profile from '../views/profile.vue';
import Repos from '../views/repos.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Dashboard,
			children: [
				{
					path: '',
					component: Navbar
				}
			]
		}, {
			path: '/profile/:user',
			component: Profile,
			children: [
				{
					path: '',
					component: Navbar
				}
			]
		}, {
			path: '/:user/:repos',
			component: Repos,
			children: [
				{
					path: '',
					component: Navbar
				}
			]
		}
	]
});