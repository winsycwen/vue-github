<template>
	<div class="profile-repos-content">
		
	</div>
</template>
<script>
export default {
	methods: {
		getRepos() {
			// 获取用户仓库信息
			let _this = this,
				url = `https://api.github.com/users/${_this.$route.params.user}/repos`;

			_this.$http.get(url)
				.then(response => {

				}, response => {
					alert(response.statusText);
				});
		}
	}

};
</script>