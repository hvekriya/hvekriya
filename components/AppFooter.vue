<template>
  <div class="container mx-auto">
    <div
      class="
        pt-20
        sm:pt-30
        pb-8
        mt-20
        border-t-2 border-primary-light
        dark:border-secondary-dark
      "
    >
      <!-- Footer copyright -->
      <div class="flex justify-center items-center text-center">
        <div class="text-lg text-ternary-dark dark:text-ternary-light">
          &copy; {{ copyrightDate }}. hvekriya portfolio | Inspired by
          <a
            href="https://stoman.me"
            target="__blank"
            class="text-ternary-dark dark:text-secondary-light hover:underline"
            >Stoman</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import feather from "feather-icons";
export default {
  data: () => {
    return {
      // Todo
    };
  },
  computed: {
    ...mapState(["copyrightDate", "socialProfiles"]),
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style scoped></style>
