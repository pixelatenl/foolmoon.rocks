<template>
  <div class="logo">
    <nuxt-link to="/live">
        <h1 class="logo__title">
            <span class="logo__title-fool">Fool</span>
            <span class="logo__title-moon">Moon</span>
            <span class="logo__title-rocks">.rocks</span>
        </h1>
        <span class="logo__main">
            <span class="logo__circle logo__circle--1"></span>
            <span class="logo__circle logo__circle--2"></span>
        </span>
        <span class="logo__circle logo__circle--3"></span>
        <span class="logo__circle logo__circle--4"></span>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.logo {
    position: relative;
    margin: auto;
    width: $logo-size;
    height: $logo-size;
    animation: fadeIn 0.5s ease-in;
}

.logo__title {
    position: absolute;
    top: 86px;
    left: 25px;
    z-index: 600;
    color: $color-white;
    text-transform: uppercase;
}
.logo__title-fool {
    display: block;
    letter-spacing: 12px;
    font-weight: 400;
    font-size: $font-size-100;
    line-height: $font-size-200;
    opacity: 0.6;
}
.logo__title-moon {
    display: block;
    letter-spacing: 38px;
    font-weight: 400;
    font-size: $font-size-700;
    line-height: $font-size-700;
}
.logo__title-rocks {
    display: block;
    letter-spacing: 12px;
    font-weight: 400;
    font-size: $font-size-100;
    line-height: $font-size-200;
    opacity: 0.6;
}
.logo__main {
    position: absolute;
    z-index: 500;
    width: $logo-size;
    height: $logo-size;
    transform: rotate(-45deg);
}
.logo__circle {
    position: absolute;
    width: $logo-size;
    height: $logo-size;
}
.logo__circle--1 {
    left: $logo-size / 2;
    z-index: 400;
    width: $logo-size / 2;
    border-top-right-radius: $logo-size * 2;
    border-bottom-right-radius: $logo-size * 2;
    background-color: $color-red;
}
.logo__circle--2 {
    z-index: 300;
    width: $logo-size / -2;
    border-radius: $logo-size * 2;
    background-color: $color-black;
}
.logo__circle--3 {
    left: -40px;
    z-index: 200;
    border-radius: $logo-size;
    background-color: rgba($color-red, 0.3);
}
.logo__circle--4 {
    left: -80px;
    z-index: 100;
    border-radius: $logo-size;
    background-color: rgba($color-red, 0.15);
}

</style>
