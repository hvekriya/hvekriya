<template>
  <main role="main">
    <section
      class="jumbotron text-center text-white"
      v-bind:style="{ backgroundImage: 'url(' + this.cover.url + ')' }"
    >
      <div class="container">
        <h1
          class="
            home-heading
            display-3
            animated
            fadeInUp
            heading--stroke-shadow
          "
        >
          Haresh Vekriya
        </h1>

        <p class="lead animated fadeInUp">UX/UI Designer</p>
        <p>
          <a href="/experience" class="btn btn-outline-primary m-2"
            >Experience</a
          >
          <a
            href="https://docs.google.com/document/d/1pMYipVQCjtwLo4klINJkbKtv3lsuw2Ruch1zodPQdOo/edit?usp=sharing"
            class="btn btn-outline-primary m-2"
            target="_blank"
            >Download CV</a
          >
        </p>
      </div>
    </section>

    <LatestProjects />
    <div class="container">
      <div class="bd-callout bd-callout-info mb-5">
        <p>
          If you want to see more examples of my UI skills then please visit my
          profile on Dribble or Behance.
          <br />
          <a href="https://dribbble.com/hvekriya" class="mr-4">
            <i class="fab fa-dribbble text-primary mr-1"></i>
            Dribble
          </a>
          <a href="https://www.behance.net/skyhighdesign">
            <i class="fab fa-behance-square text-primary mr-1"></i>
            Behance
          </a>
        </p>
      </div>
    </div>
    <!-- <BlogPosts /> -->
    <!-- <DribblePosts /> -->
    <MediumClaps />
    <Tools />
  </main>
</template>

<script>
import LatestProjects from "../components/LatestProjects";
import BlogPosts from "../components/BlogPosts";
import MediumClaps from "../components/MediumClaps";
import Tools from "../components/Tools";
import DribblePosts from "../components/DribblePosts";

export default {
  name: "Home",
  components: {
    LatestProjects,
    BlogPosts,
    MediumClaps,
    Tools,
    DribblePosts,
  },
  data() {
    return {
      cover: {
        url: "https://images.unsplash.com/photo-1580581764285-5b9567a3649e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&auto=format&fit=crop&w=2250&q=80",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  background-size: cover;
}
// .home-heading {
//   color: white;
//   font-family: "Great Vibes", cursive;
//   font-size: 80px;
//   line-height: 100px;
//   font-weight: normal;
//   margin-bottom: 0px;
//   margin-top: 40px;
//   margin-bottom: 20px;
//   text-align: center;
//   text-shadow: 0 1px 1px #fff;
// }
</style>
