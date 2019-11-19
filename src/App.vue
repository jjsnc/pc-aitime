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
  methods: {
    toggleCountry(country) {
      this.currentCountry = country;
      this.selectFlag = false;
    }
  }
};
</script>

