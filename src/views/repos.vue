<template>
	<div class="content">
		<Navbar :navList="navList"></Navbar>
	</div>
</template>

<script>
import Navbar from '../components/navbar.vue';

export default {
	components: {
		Navbar
	},
	data() {
		navList: [{
			link: '/'+ this.$route.params.user + '/' + this.$route.params.repos,
			title: 'Code',
			num: ''
		}, {
			link: '/'+ this.$route.params.user + '/' + this.$route.params.repos,
			title: 'Issues',
			num: ''
		}]
	}
};
</script>