<template>
  <div class="upcoming-shows">
      <div class="upcoming-shows__item">
        <a href="/live" class="upcoming-shows__link">Upcoming shows</a>
      </div>
       <div class="upcoming-shows__item">
           <a href="/live" class="upcoming-shows__link upcoming-shows__link--90">#staystrong #loudlove</a>
       </div>
  </div>
</template>

<style lang="scss" scoped>
.upcoming-shows {
    margin: 40px 0;
    text-align: center;
    animation: fadeIn 0.5s ease-in;
}
.upcoming-shows__link {
    position: relative;
    display: inline-block;
    margin: 10px;
    padding: 6px 5px 5px 50px;
    background-color: rgba($color-black, 0.6);
    color: $color-white;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 12px;
    font-size: 24px;

    &::after,
    &::before {
        position: absolute;
        top: 9px;
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        content: '';
    }

    &::after {
        left: 25px;
        border-left: 15px solid $color-red;
    }

    &::before {
        left: 7px;
        border-left: 15px solid rgba($color-red, 0.3);
    }

    &--90 {
        padding: 6px 30px 5px 5px;
        letter-spacing: 7px;
        font-size: 14px;

        &::after,
        &::before {
            top: 12px;
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
        }

        &::after {
            right: 4px;
            left: auto;
            border-left: 10px solid $color-red;
        }

        &::before {
            right: 15px;
            left: auto;
            border-left: 10px solid rgba($color-red, 0.3);
        }
    }
}

</style>
