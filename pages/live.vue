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
              <li v-for="(show, index) in shows" :key="index" class="show-list__item" v-bind:class="{'is-past': isPastShow(show.date)}">
                <a :href="show.url" class="show-list__item-link">
                  <span class="show-list__item-date">{{show.date | date}}</span>
                  <span class="show-list__item-title">{{show.title}} - {{show.venue}}</span>
                  <span class="show-list__item-location">{{show.city}}</span>
                </a>
              </li>
            </ul>
          </div>
      </div>
    </section>
  </div>
</div>
</template>
<script>
  import shows from '~/static/shows.json'
  export default {
    data () {
      return { shows }
    },
    methods: {
      isPastShow(date) {
      const showDate = new Date(date);
      const yesterday = new Date(new Date().setDate(new Date().getDate()-1));
      if (showDate < yesterday) {
        return true;
        }
      }
    }
  }
</script>
