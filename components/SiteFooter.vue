<template>
	<footer class="site-footer">
		<div class="copy">
			<span class="icon">
				<fa :icon="['fas', 'copyright']" />2020
			</span>
			<h2 class="h">David Kocman</h2>
		</div>
		<div class="social">
			<a href="https://www.linkedin.com/in/david-kocman-05448483/" title="linkedin profile" class="icon icon--linkedin"
				target="_blank" rel="noreferrer">
				<fa :icon="['fab', 'linkedin']" />
			</a>
			<a href="https://github.com/davidkocman" title="github profile" class="icon icon--github" target="_blank"
				rel="noreferrer">
				<fa :icon="['fab', 'github']" />
			</a>
			<a href="https://www.facebook.com/david.kocman.3" title="facebook profile" class="icon icon--facebook"
				target="_blank" rel="noreferrer">
				<fa :icon="['fab', 'facebook-f']" />
			</a>
		</div>
	</footer>
</template>
<style lang="scss">
@import "~/assets/scss/components/site-footer.scss";
</style>
