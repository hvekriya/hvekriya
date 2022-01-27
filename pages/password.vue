<template>
  <div>
    <div>
      <div v-if="isAuthorised">
        <h2>Looks like you're already logged in.</h2>
      </div>
      <div v-else>
        <h2>Please enter the password.</h2>
      </div>
      <div v-if="isAuthorised">
        <a href="."> To protected area </a>
        <a @click="removeAuthorisation()">Log out</a>
      </div>
      <div v-else>
        <div>
          <form>
            <input
              v-model="methodLoginValue"
              type="password"
              placeholder="Your password for the method login approach"
            />
            <button @click="loginUser()">Log in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      methodLoginValue: "",
      isAuthorised: false,
    };
  },
  computed: {
    redirectPath() {
      const path = this.$route.query.previousPath;
      return path || "/";
    },
  },
  mounted() {
    this.isAuthorised = this.$passwordProtect.isAuthorised();
  },
  methods: {
    loginUser() {
      this.$passwordProtect.authorise(this.methodLoginValue);
      this.isAuthorised = this.$passwordProtect.isAuthorised();
      this.$router.push(this.redirectPath);
    },
    removeAuthorisation() {
      this.$passwordProtect.removeAuthorisation();
      this.isAuthorised = false;
    },
  },
};
</script>
