<template>
  <header class="page-header">
    <h1 class="page-header__title">Fool Moon</h1>
    <nav class="navigation" role="navigation">
      <ul class="navigation__list">
        <li class="navigation__item" v-for="link in navigation" v-bind:key="link.href">
          <a class="navigation__link" :href="link.href">{{ link.title }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ["navigation"]
};
</script>

<style lang="scss" scoped>
.page-header {
    background-color: $color-black;
    color: $color-white;
    text-align: center;
    text-transform: uppercase;
    @media (min-width: $small-screen) {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 50px;
    }
}

.page-header__title {
    display: none; //NOTE Style the title
}

.navigation {
    display: inline-block;
    margin: auto;
}

.navigation__list {
    margin: 0;
    padding: 0;
    list-style: none;
    @media (min-width: $small-screen) {
        display: flex;
    }
}

.navigation__item {
    margin: 0 10px;
    @media (max-width: $small-screen) {
        display: inline-block;
    }
    @media (min-width: $small-screen) {
        height: 50px;
        flex: 1 0 auto;
    }
}

.navigation__link {
    display: inline-block;
    padding: 0 10px;
    color: $color-white;
    text-decoration: none;
    letter-spacing: 10px;
    line-height: 50px;
    cursor: pointer;
}

</style>
