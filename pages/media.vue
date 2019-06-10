<template>
   <div class="columns">
      <div class="column">
         <section class="block">
            <header class="block__header">
               <h1 class="block__title">Music</h1>
            </header>
            <div class="block__content content">
               <p>Download our music</p>
                <ul>
                    <li><a href="http://www.foolmoon.rocks/downloads/Fool Moon - Lady Under Water - Single - 256kbps.mp3.zip">Single - Lady Underwater (MP3)</a></li>
                    <li><a href="http://www.foolmoon.rocks/downloads/Fool Moon - Honey I Know - Single -  256kbps.mp3.zip">Single - Honey I Know (MP3)</a></li>
                    <li><a href="http://www.foolmoon.rocks/downloads/FoolMoonLittleDoWeKnow.zip">Album - Little Do We Know (MP3)</a></li>
                    <li><a href="http://www.foolmoon.rocks/downloads/FoolMoonLittleDoWeKnow-wav.zip">Album - Little Do We Know (WAV)</a></li>
                </ul>
               <hr>
               <p><a href="https://open.spotify.com/album/6ZZmrCKO5JsFvRvhAiZmUc"><img src="~/assets/images/covers/cd-cover-ladyunderwater-hd.jpg" alt="Lady Underwater by Fool Moon"/></a></p>
               <p>Also available on</p>
                  <ul class="store-list">
                  <li class="store store-spotify"><a href="https://open.spotify.com/album/6ZZmrCKO5JsFvRvhAiZmUc">Spotify</a></li>
                  <li class="store store-itunes"><a href="https://itunes.apple.com/us/album/lady-underwater-single/id1175479280?uo=4&app=itunes">iTunes / Apple Music</a></li>
              </ul>

               <p><a href="https://open.spotify.com/album/7wjoBTchm1M05tJZOaFSKB"><img src="~/assets/images/covers/cd-cover-hd.jpg" alt="Little do we know by Fool Moon"/></a></p>
               <p>Also available on</p>
               <ul class="store-list">
                  <li class="store store-spotify"><a href="https://open.spotify.com/album/7wjoBTchm1M05tJZOaFSKB">Spotify</a></li>
                  <li class="store store-itunes"><a href="https://itunes.apple.com/nl/album/little-do-we-know/id1020934188?l=en">iTunes / Apple Music</a></li>
                  <li class="store store-deezer"><a href="https://www.deezer.com/album/10857608">Deezer</a></li>
              </ul>
            </div>
         </section>
      </div>
      <div class="column">
         <section class="block">
            <header class="block__header">
               <h1 class="block__title">Video</h1>
            </header>
            <div class="block__content content">
               <p>"Lady Underwater" Single Promo</p>
               <iframe width="100%" height="315" src="https://www.youtube.com/embed/OwttHj5g2mA" frameborder="0"></iframe>
               <hr>
               <p>"Honey I know" leader intro for "De Ridder" S04E01</p>
               <iframe width="100%" height="315" src="https://www.youtube.com/embed/DXhw-RnymfY" frameborder="0"></iframe>
               <hr>
               <p>Cafe De Speeltuin Breda (Friday on the rocks) 22-09-2017 </p>
               <iframe width="100%" height="315" src="https://www.youtube.com/embed/s8kyiyCoEuI" frameborder="0"></iframe>
               <hr>
               <p>Helvoirtsweekend - Helvoirt 2016 </p>
               <iframe width="100%" height="315" src="https://www.youtube.com/embed/r2iLpZLApYU" frameborder="0"></iframe>
               <hr>
               <p>Merleyn Muziekmeerdaagse - Doetinchem 2015 </p>
               <iframe width="100%" height="315" src="https://www.youtube.com/embed/TNX2Tb-RXGI" frameborder="0"></iframe>
               <hr>
               <p>Cocaine (JJ Cale) live @ Cafe Oud Brabant </p>
               <iframe width="100%" height="315" src="https://www.youtube.com/embed/irTMu5J14bM" frameborder="0"></iframe>
               <hr>
               <p>Little do we know live @ Cafe Oud Brabant </p>
               <iframe width="100%" height="315" src="https://www.youtube.com/embed/K3cCXJSDrUE" frameborder="0"></iframe>
               <hr>
               <p>A quip from Tycho in Minecraft-style. Jump burning man!! </p>
               <iframe width="100%" height="315" src="https://www.youtube.com/embed/Eip0X2Zb7VU" frameborder="0"></iframe>
            </div>
         </section>
      </div>
      <div class="column">
         <section class="block">
            <header class="block__header">
               <h1 class="block__title">Photos</h1>
            </header>
            <div class="block__content content">
            <template>
               <vue-instagram :token="token" :count="12" mediaType="image">
                  <template slot="feeds" slot-scope="props">
                     <a :href="props.feed.link" target="_blank">
                        <img :src="props.feed.images.standard_resolution.url" class="insta-image" alt="Fool Moon on Instagram">
                     </a>
                  </template>
                  <template slot="error" slot-scope="props">
                     <div class="fancy-alert"> {{ props.error.error_message }} </div>
                  </template>
               </vue-instagram>
            </template>
            </div>
         </section>
      </div>
   </div>
</template>

<script>

  export default {
    data () {
      return {
         token: '2058849712.daca3f4.ea4bc96344ac4ae78c54ce178523fd66'
      }
    }
  }
</script>
<style lang="scss" scoped>
.insta-image {
    margin-bottom: 1em;
}
</style>