<template>
<footer class="component-footer clearfix">
	<div class="logo">
		<span class="logo-icon"></span>
	</div>
	<div class="info">
		<p>Make by <a class="link" href="https://github.com/winsycwen">winsycwen</a>.</p>
		<p>Just for study.</p>
	</div>
</footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../assets/fonts/fonts.scss';
@import '../assets/css/mixins.scss';
.component-footer {
	padding: 15px;
	border-top: 1px solid $border-color;
	.logo-icon {
		float: left;
		&:before {
			font-size: 32px;
			color: #a3aab1;
			@extend .icon-github;
		}
	}
	.info {
		float: right;
		.link {
			color: $font-blue;
		}
		p {
			color: #959da5;
		}
	}
}
</style>