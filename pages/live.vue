<template>
   <div class="columns">
      <div class="column">
  <section class="block">
    <header class="block__header">
      <h1 class="block__title">Live shows</h1>
    </header>
    <div class="block__content">
       <div class="content">
      <ul>
        <li v-for="show in shows" v-bind:key="show">
           <div> <strong>{{show.date}} - {{show.time}}</strong> - <a :href="show.url">{{show.title}}</a> </div>
           <div>Venue: {{show.venue}} - {{show.city}} </div>
        </li>
      </ul>
       </div>
    </div>
  </section>
      </div></div>
</template>
<script>
  import shows from '~/static/shows.json'
  export default {
    data () {
      return { shows }
    }
  }
</script>
