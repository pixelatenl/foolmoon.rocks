<template>
  <header class="page-header">
    <h1 class="page-header__title">Fool Moon</h1>
    <nav class="navigation" role="navigation">
      <ul class="navigation__list">
        <li class="navigation__item" v-for="link in navigation" v-bind:key="link.href">
            <nuxt-link class="navigation__link" :to="link.href">
                {{ link.title }}
            </nuxt-link>
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
    @media (max-width: $small-screen) {
        display: inline-block;
        margin: 0 5px;
    }
    @media (min-width: $small-screen) {
        margin: 0 10px;
        height: 50px;
        flex: 1 0 auto;
    }
}

.navigation__link {
    @media (max-width: $small-screen) {
        padding: 0;
    }
    @media (min-width: $small-screen) {
        padding: 0 10px;
    }
    display: inline-block;
    color: $color-white;
    text-decoration: none;
    letter-spacing: 10px;
    line-height: 50px;
    cursor: pointer;
    text-indent: 10px //NOTE Align center adjustment caused by the letter-spacing
}
.navigation__link.nuxt-link-exact-active {
    border-bottom: 2px solid $color-red; //NOTE Active state
}
</style>
