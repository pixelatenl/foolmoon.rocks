<template>
  <div class="columns">
    <div class="column">
      <section class="block">
        <header class="block__header">
          <h1 class="block__title">Live shows</h1>
        </header>
        <div class="block__content">
          <div class="show-list">
            <ul class="show-list__list">
              <li
                v-for="(show, index) in shows"
                :key="index"
                class="show-list__item"
                v-bind:class="{ 'is-past': isPastShow(show.date) }"
              >
                <a :href="show.url" class="show-list__item-link">
                  <span class="show-list__item-date">{{
                    formatDate(show.date)
                  }}</span>
                  <span class="show-list__item-title"
                    >{{ show.title }} - {{ show.venue }}</span
                  >
                  <span class="show-list__item-location">{{ show.city }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import shows from "~~/public/shows.json";

function formatDate(value) {
  return new Date(value).toLocaleDateString(["en-US"], {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

function isPastShow(date) {
  const showDate = new Date(date);
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
  if (showDate < yesterday) {
    return true;
  }
}
</script>
