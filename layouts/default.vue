<template>
	<div class="page">
		<div class="top"></div>
		<div class="left"></div>
		<div class="right"></div>
		<div class="bottom"></div>
		<div class="page-content">
			<SiteHeader />
			<Nuxt />
			<SiteFooter />
		</div>
	</div>
</template>

<style lang="scss">
@import "~/assets/scss/global/reset.scss";
@import "~/assets/scss/global/base.scss";
@import "~/assets/scss/global/aspect-ratio.scss";
.page-enter-active,
.page-leave-active {
	transition-property: opacity;
	transition-timing-function: ease-in-out;
	transition-duration: 150ms;
}
.page-enter,
.page-leave-to {
	opacity: 0;
}
</style>