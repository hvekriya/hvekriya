<template>
  <div class="pt-10 sm:pt-20 md:pt-24">
    <!-- Projects grid header -->
    <div class="text-center">
      <p
        class="
          text-2xl
          sm:text-5xl
          font-semibold
          mb-3
          text-ternary-dark
          dark:text-ternary-light
        "
      >
        Projects
      </p>
      <!-- Note: This description is commented out, but if you want to see it, just uncomment this -->
      <!-- <p class="text-lg sm:text-xl text-gray-500 dark:text-ternary-light">
        {{ projectsDescription }}
      </p> -->
    </div>

    <!-- Filter and search projects
    <div class="mt-10 sm:mt-16">
      <h3
        class="
          text-center text-secondary-dark
          dark:text-ternary-light
          text-md
          sm:text-xl
          font-normal
          mb-3
        "
      >
        Search projects by title or filter by category
      </h3>
      <div
        class="
          flex
          justify-between
          border-b border-primary-light
          dark:border-secondary-dark
          pb-3
          gap-3
        "
      >
        <div class="flex justify-between gap-2">
          <span
            class="
              hidden
              sm:block
              bg-primary-light
              dark:bg-ternary-dark
              p-2.5
              shadow-sm
              rounded-xl
              cursor-pointer
            "
          >
            <i
              data-feather="search"
              class="text-ternary-dark dark:text-ternary-light"
            ></i>
          </span>
          <input
            v-model="searchProject"
            class="
              pl-3
              pr-1
              sm:px-4
              py-2
              border-1 border-gray-200
              dark:border-secondary-dark
              rounded-lg
              text-sm
              sm:text-md
              bg-secondary-light
              dark:bg-ternary-dark
              text-primary-dark
              dark:text-ternary-light
            "
            id="name"
            name="name"
            type="search"
            required=""
            placeholder="Search Projects"
            aria-label="Name"
          />
        </div>
        <ProjectsFilter @change="selectedProject = $event" />
      </div>
    </div> -->

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <div
        v-for="project in projects"
        :key="project.uid"
        class="
          rounded-xl
          shadow-lg
          hover:shadow-xl
          cursor-pointer
          mb-10
          sm:mb-0
          bg-secondary-light
          dark:bg-ternary-dark
        "
        aria-label="Single Project"
      >
        <NuxtLink :to="`/projects/${project.uid}`">
          <div>
            <img
              :src="project.data.cover.url"
              :alt="project.data.cover.alt"
              class="rounded-xl border-none"
            />
          </div>
          <div class="text-center px-4 py-6">
            <p
              class="
                text-2xl text-ternary-dark
                dark:text-ternary-light
                font-semibold
                mb-2
              "
            >
              {{ project.data.client[0].text }}
            </p>
            <p
              class="text-lg text-ternary-dark dark:text-ternary-light"
              v-for="(title, index) in project.data.title"
              :key="'project-' + index"
            >
              {{ title.text }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      projects: "",
      filteredProjects: "",
      tags: [],
    };
  },

  computed: {
    selectedFilters: function () {
      let filters = [];
      let checkedFiters = this.tags.filter((obj) => obj.checked);
      checkedFiters.forEach((element) => {
        filters.push(element.value);
      });
      return filters;
    },
  },

  async fetch() {
    await this.$prismic.api
      .query(this.$prismic.predicates.at("document.type", "projects"))
      .then((document) => {
        if (document) {
          this.projects = document.results;
          this.filteredProjects = this.projects;

          var tags = document.results
            .map((project) => project.tags)
            .map((tags) => tags);
          var merged = [].concat.apply([], tags);
          var uniqueTags = [];

          // $.each(merged, function (i, el) {
          //   if ($.inArray(el, uniqueTags) === -1) uniqueTags.push(el);
          // });

          this.tags = uniqueTags.map((tags) => {
            return { checked: false, value: tags };
          });
        } else {
          error({ statusCode: 404, message: "Page not found" });
        }
      });
  },

  methods: {
    getfilteredData: function () {
      // first check if filters where selected
      if (this.selectedFilters.length > 0) {
        this.filteredProjects = this.projects.filter((project) =>
          this.selectedFilters.every((val) => project.tags.indexOf(val) >= 0)
        );
      }
      if (this.selectedFilters.length === 0) {
        console.log("Empty");
        this.filteredProjects = this.projects;
      }
    },
  },
  mounted() {
    this.getfilteredData();
  },
};
</script>

<style lang="scss" scoped></style>
