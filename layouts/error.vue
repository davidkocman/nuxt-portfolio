<template>
	<div class="content">
		<section class="error">
			<h2 v-if="error.statusCode === 404" class="section-heading">404 - Page not found</h2>
			<div v-else>
				<h2 class="section-heading">Error</h2>
				<h3>
					Code:
					<span>{{ error.statusCode }}</span>
				</h3>
				<h3>
					Message:
					<span>{{ error.message }}</span>
				</h3>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	props: ["error"],
};
</script>
<style lang="scss">
@import "~/assets/scss/components/error.scss";
</style>