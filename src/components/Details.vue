<template>
  <div data-aos="zoom-in-down" class="container">
      <h2 class="descrition_text">{{zodiac.name}}</h2>
      <b-img class="img" :src="require('../assets/'+zodiac.image)" v-bind="mainProps" rounded alt="Rounded image"></b-img>
      <br>
      <br>
      <h3>{{zodiac.date}}</h3>
      <p v-html="zodiac.description.replace(/(\n)/gi,'<br>')" class="descrition_text"></p>
      <br>
      <br>
    <div>
    <p>
    </p>
  </div>
</div>
</template>

<script>

import json from '../assets/zodiacs.json'

export default {
name: "Details",
props: ['id'],

data() {
  return {
    zodiacId: this.$route.params.id,
    zodiac_info: json,
    mainProps: { blank: false, class: 'm1' }
    }
    },
        computed: {
          zodiac() {
              return this.zodiac_info.find((tecken) => {
                return tecken.id == this.zodiacId
                });
      },
    }
  }


</script>

<style>
.img {
  width: 40%;
  height: 40%;
}
.descrition_text{
  color: lightgray;
}
</style>