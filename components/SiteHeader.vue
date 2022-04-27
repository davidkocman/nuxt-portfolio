<template>
	<header class="site-header">
		<NuxtLink to="/" class="logo">D</NuxtLink>
		<div class="menu-toggle" @click="menuVisible = !menuVisible">
			<fa :icon="['fas', 'bars']" />
		</div>
		<nav :class="{ visible: menuVisible }">
			<ul>
				<li @click="menuVisible = false">
					<NuxtLink to="/">Home</NuxtLink>
				</li>
				<li @click="menuVisible = false">
					<NuxtLink to="/skills">Skills & interests</NuxtLink>
				</li>
				<li @click="menuVisible = false">
					<NuxtLink to="/projects">Projects</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>
<script>
export default {
	data () {
		return {
			menuVisible: false,
		};
	},
};
</script>
<style lang="scss">
@import "~/assets/scss/components/site-header.scss";
</style>