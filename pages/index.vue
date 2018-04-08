<template>
  <div class="intro">
    <fool-moon-logo/>
    <upcoming-shows/>
  </div>

</template>

<script>
import FoolMoonLogo from "~/components/FoolMoonLogo.vue";
import UpcomingShows from "~/components/UpcomingShows.vue";

export default {
  components: {
    FoolMoonLogo,
    UpcomingShows
  }
};
</script>

<style lang="scss" scoped>
.intro {
    padding-top: 15%;
}
</style>