<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      currentCountry: "中文"
    };
  },
  created() {
    let lang = localStorage.getItem("language");
    if (!lang) {
      localStorage.setItem("language", "le");
    }
  },
  methods: {
    toggleCountry(country) {
      this.currentCountry = country;
      this.selectFlag = false;
    }
  }
};
</script>
<style scoped>
body {
  background: #000;
}
</style>

