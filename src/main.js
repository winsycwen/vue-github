import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
import router from './router/router.js';
import './assets/css/common.scss';

Vue.use(VueResource);

new Vue({
	el: '#app',
	router,
	http: {},
	render: function(h) {
		return h(App);
	}
});