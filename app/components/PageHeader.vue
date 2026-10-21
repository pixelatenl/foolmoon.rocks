<template>
  <header class="page-header">
    <p class="page-header__title">Fool Moon</p>
    <nav class="navigation" role="navigation">
      <ul class="navigation__list">
        <li
          class="navigation__item"
          v-for="link in navigation"
          v-bind:key="link.href"
        >
          <nuxt-link class="navigation__link" :to="link.href">
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
defineProps({
  navigation: {
    type: Array,
    default: () => [],
  },
});
</script>
