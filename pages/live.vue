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
<style lang="scss" scoped>
.show-list__list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.show-list__item {
    padding: 10px 0;
    border-top: 1px solid rgba($color-white, 0.25);
    &.is-past {
      text-decoration: line-through;
    }
}
.show-list__item-link {
    color: $color-white;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: $color-red;
    }
    @media (max-width: $small-screen) {
        display: block;
        span {
            display: inline-block;
            margin-right: 10px;
            vertical-align: middle;
        }
    }
    @media (min-width: $small-screen) {
        display: flex;
        justify-content: space-between;
        span {
            flex-grow: 1;
            flex-shrink: 0;
            flex-basis: auto;
        }
    }
}
.show-list__item-date {
    font-weight: 700;
    @media (min-width: $small-screen) {
        max-width: 140px;
    }
}
.show-list__item-location {
    @media (min-width: $small-screen) {
        text-align: right;
    }
}

</style>
