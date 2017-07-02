import Vue from 'vue';
import VueRouter from 'vue-router';

// 公用头部
import Navbar from '../components/navbar.vue';
import RepoBar from '../components/reponav.vue';

import Dashboard from '../views/dashboard.vue';
import Profile from '../views/profile.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			components: {
				navbar: Navbar,
				repobar: RepoBar,
				content: Dashboard
			}
		}, {
			path: '/profile',
			components: {
				navbar: Navbar,
				repobar: RepoBar,
				content: Profile
			}
		}
	]
});