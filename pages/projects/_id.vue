<template>
  <div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div v-if="project">
      <!-- Project heading and meta info -->
      <div>
        <p
          class="
            text-left text-3xl
            sm:text-4xl
            font-bold
            text-primary-dark
            dark:text-primary-light
            mt-7
            sm:mt-20
            mb-7
          "
        >
          {{ project.title[0].text }}
        </p>
        <div class="flex">
          <div class="flex items-center mr-10">
            <i
              data-feather="clock"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ project.first_publication_date | formatDate() }}</span
            >
          </div>
          <div class="flex items-center">
            <i
              data-feather="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              v-for="(tag, index) in tags"
              :key="'tag-' + index"
              class="
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >{{ tag }}</span
            >
          </div>
        </div>
      </div>

      <!-- Project gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
          class="mb-10 sm:mb-0"
          v-for="(projectImage, index) in project.images"
          :key="'img' + index"
        >
          <img
            :src="projectImage.image.url"
            class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
          />
        </div>
      </div>

      <!-- Project info -->
      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details -->
        <div class="w-full sm:w-1/3 text-left">
          <!-- Single project client details -->
          <div class="mb-7">
            <p
              class="
                text-2xl
                font-semibold
                text-secondary-dark
                dark:text-secondary-light
                mb-2
              "
            >
              Overview
            </p>
            <ul class="leading-loose">
              <li
                class="
                  font-general-regular
                  text-ternary-dark
                  dark:text-ternary-light
                "
              >
                <span>Client name: {{ project.client[0].text }}</span>
                <br />
                <span
                  >Website:
                  <a :href="project.client_website[0].text">{{
                    project.client_website[0].text
                  }}</a></span
                >
                <br />
                <span>My role: {{ project.role[0].text }}</span>
                <br />
                <span>Project length: {{ project.length[0].text }}</span>
              </li>
            </ul>
          </div>

          <!-- Single project objectives -->
          <div class="mb-7">
            <p
              class="
                text-2xl
                font-semibold
                text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              Objective
            </p>
            <p class="text-primary-dark dark:text-ternary-light">
              <prismic-rich-text :field="project.challenge" />
            </p>
          </div>

          <!-- Single project technologies -->
          <!-- <div class="mb-7">
            <p
              class="
                text-2xl
                font-semibold
                text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              Technologies
            </p>
            <p class="text-primary-dark dark:text-ternary-light">
              {{ project.technologies.join(", ") }}
            </p>
          </div> -->
        </div>

        <!-- Single project right section details -->
        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p
            class="
              text-primary-dark
              dark:text-primary-light
              text-xl
              font-bold
              mb-7
            "
          >
            Project details
          </p>
          <p class="mb-5 text-lg text-ternary-dark dark:text-ternary-light">
            <prismic-rich-text :field="project.content" />
          </p>
        </div>
      </div>
      <!-- Project related projects -->
      <!-- TODO -->
      <!-- <ProjectRelatedProjects /> -->
    </div>

    <!-- Load not found components if no project found -->
    <div v-else class="container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  scrollToTop: true,
  data: () => {
    return {
      project: "",
      tags: "",
    };
  },
  async fetch() {
    await this.$prismic.api
      .getByUID("projects", this.$route.params.id)
      .then((document) => {
        if (document) {
          this.project = document.data;
          this.tags = document.tags;
        } else {
          this.$nuxt.context.error({
            status: 404,
            message: "Page not found",
          });
        }
      });
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style lang="scss" scoped></style>
