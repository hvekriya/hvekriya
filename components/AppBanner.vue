<template>
  <section
    class="
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      mt-12
      md:mt-2
    "
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="
          text-3xl
          md:text-4xl
          xl:text-5xl
          text-center
          sm:text-left
          font-semibold
          text-ternary-dark
          dark:text-primary-light
          uppercase
        "
      >
        Hi, I am Haresh
      </h1>
      <p
        class="
          mt-4
          text-2xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          font-semibold
          leading-none
          text-gray-400
        "
      >
        A UX/Designer & Front-end Developer
      </p>
      <div class="flex justify-center sm:block">
        <a
          href="https://drive.google.com/file/d/1OnVoRHDHz7EABlju_7JxocuFv43JeBDB/view?usp=sharing"
          class="
            flex
            justify-center
            items-center
            w-36
            sm:w-48
            mt-12
            mb-6
            sm:mb-0
            text-lg
            border border-indigo-200
            dark:border-ternary-dark
            py-2.5
            sm:py-3
            shadow-lg
            rounded-lg
            bg-indigo-50
            focus:ring-1 focus:ring-indigo-900
            hover:bg-indigo-500
            text-gray-500
            hover:text-white
          "
          aria-label="View Resume"
        >
          <i
            data-feather="arrow-right-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6"
          ></i>
          <span class="text-sm sm:text-lg">View CV</span></a
        >
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right mt-4 sm:mt-0">
      <HomePagellustration />
    </div>
  </section>
</template>

<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {
      // Todo
    };
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
