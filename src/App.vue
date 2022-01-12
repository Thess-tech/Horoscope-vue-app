<template>
  <div id="app">
    <Header />
    <Start />
    <transition name="router-anim" leave-active-class="animate__animated animate__fadeOut" appear enter-active-class="animate__animated animate__fadeIn delay">
      <router-view />
    </transition>
  </div>
</template>

<script>

import Start from './components/Start.vue'
import Header from './components/Header.vue'




export default {
  components: {
    Start,
    Header
  }

  }

</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

body {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}

#app {
  width: 100%;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}

li {
 list-style-type: none;
}

a {
  color: lightgray;
}

.page {
  width: inherit;
}

.delay {
  --animate-delay: 0.9s;
}

</style>
