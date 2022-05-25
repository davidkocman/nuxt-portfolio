<template>
	<div class="content">
		<section class="project">
			<div v-if="project">
				<h2 class="section-heading">Project</h2>
				<h3 class="project__name">
					Name:
					<span>{{ project.name }}</span>
				</h3>
				<h4 v-if="project.description" class="project__description">
					Descrition:
					<span>{{ project.meta.description }}</span>
				</h4>
				<h4 v-if="project.url" class="project__link">
					Link:
					<span>
						<a :href="project.url" target="_blank">
							{{
								project.url
							}}
						</a>
					</span>
				</h4>
				<div class="project-image aspect-ratio aspect-ratio--1x1">
					<div class="aspect-ratio__element">
						<picture>
							<source
								:srcSet="
									require(`~/assets/images/projects/${project.image.desktop}?webp`)
								"
								type="image/webp"
							/>
							<img
								:src="
									require(`~/assets/images/projects/${project.image.desktop}`)
								"
								:alt="project.name"
								width="920"
								height="836"
							/>
						</picture>
					</div>
				</div>
			</div>
			<div v-else>
				<h2 class="section-heading">Sorry. There is no such project</h2>
			</div>
		</section>
	</div>
</template>
<script>
import projects from "~/assets/projects/projects.json";
export default {
	data () {
		return {
			project: [],
		};
	},
	head () {
		return {
			title: "David Kocman - project " + this.project.name,
			meta: [
				{
					hid: "description",
					name: "description",
					content: "David Kocman - project: " + this.project.name,
				},
				{
					hid: "og:description",
					property: "og:description",
					content: "David Kocman - project: " + this.project.name,
				},
			],
		};
	},
	created () {
		try {
			const result = projects.find(
				(item) => item.slug === this.$route.params.project
			);
			this.project = result;
		} catch (e) {
			console.log(e);
		}
	},
};
</script>
<style lang="scss">
@import "~/assets/scss/components/project.scss";
</style>
