<template>
  <div>
    <div class="cinematic"></div>
    <page-header :navigation="navigation"/>
    <div class="container">
        <nuxt/>
    </div>
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue";
export default {
  components: {
    PageHeader
  },
  data: () => {
    return {
      navigation: [
        { title: "Home", href: "/" },
        { title: "Live", href: "/live" },
        { title: "Media", href: "/media" },
        { title: "Bio", href: "/bio" },
        { title: "Contact", href: "/contact" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  @media (max-width: $small-screen) {
    padding: 50px 10px 20px;
  }
  @media (min-width: $small-screen) {
    padding-top: 90px;
  }
}
</style>
