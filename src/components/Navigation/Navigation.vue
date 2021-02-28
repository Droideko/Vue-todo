<template>
  <div>
    <nav class="uk-navbar-container uk-navbar">
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li><a @click.prevent="handleDirect" href="#">Log out</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'navigation',
  methods: {
    handleDirect() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
