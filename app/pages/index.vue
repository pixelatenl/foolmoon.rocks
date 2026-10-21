<template>
  <div class="intro">
    <fool-moon-logo />
    <upcoming-shows />
  </div>
</template>

<script setup>
const title = "Fool Moon | Dutch rock band";
const description = "Official website of Fool Moon, a Dutch rock band";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: "https://foolmoon.rocks/",
});
useHead({
  link: [{ rel: "canonical", href: "https://foolmoon.rocks/" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MusicGroup",
        name: "Fool Moon",
        description,
        foundingDate: "2007",
        url: "https://foolmoon.rocks/",
        sameAs: [
          "https://open.spotify.com/album/6ZZmrCKO5JsFvRvhAiZmUc",
          "https://open.spotify.com/album/7wjoBTchm1M05tJZOaFSKB",
          "https://itunes.apple.com/us/album/lady-underwater-single/id1175479280",
          "https://itunes.apple.com/nl/album/little-do-we-know/id1020934188",
          "https://www.instagram.com/foolmoonmusic",
        ],
      }),
    },
  ],
});
</script>

<style lang="scss" scoped>
.intro {
  padding-top: 15%;
}
</style>
