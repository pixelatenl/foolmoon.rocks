<template>
  <div>
    <div class="cinematic"></div>
    <page-header :navigation="navigation" />
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script setup>
const navigation = [
  { title: "Home", href: "/" },
  { title: "Live", href: "/live" },
  { title: "Media", href: "/media" },
  { title: "Bio", href: "/bio" },
  { title: "Contact", href: "/contact" },
];
</script>
