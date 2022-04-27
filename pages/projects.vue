<template>
  <div class="content">
    <section class="projects">
      <h3 class="section-heading">Jobs done</h3>
      <div class="wrapper">
        <div v-for="project in projects" :key="project.slug">
          <NuxtLink
            :to="'/project/' + project.slug"
            class="project aspect-ratio aspect-ratio--16x9"
          >
            <div class="aspect-ratio__element">
              <div class="lqip-container">
                <img
                  :src="
                    require(`~/assets/images/projects/${project.thumbnail}?lqip`)
                  "
                />
              </div>
              <picture class="project-image">
                <source
                  :srcSet="
                    require(`~/assets/images/projects/${project.thumbnail}?webp`)
                  "
                  type="image/webp"
                />
                <img
                  :src="
                    require(`~/assets/images/projects/${project.thumbnail}`)
                  "
                  :alt="project.name"
                  width="440"
                  height="248"
                  loading="lazy"
                />
              </picture>
              <div class="info">
                <h2 class="h">{{ project.name }}</h2>
              </div>
              <div class="mobile">
                <h2 class="h">{{ project.name }}</h2>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import projects from "~/assets/projects/projects.json";
export default {
  name: "projects",
  data() {
    return {
      projects
    };
  },
  head: {
    title: "David Kocman - projects",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "David Kocman - projects I've worked on."
      }
    ]
  }
};
</script>
<style lang="scss">
@import "~/assets/scss/components/projects.scss";
</style>