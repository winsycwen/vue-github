import Vue from 'vue';
import App from './App.vue';

import router from './router/router.js';
import './assets/css/common.scss';

new Vue({
	el: '#app',
	router,
	render: function(h) {
		return h(App);
	}
});