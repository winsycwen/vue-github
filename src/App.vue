<template>
	<div id="app">
		<router-view></router-view>
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from './components/footer.vue';
export default {
	components: {
		Foot
	}
};
</script>