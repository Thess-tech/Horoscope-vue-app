<template>
  <b-container>
    <!-- <p>{{ new Date().toLocaleString() }}</p> -->
    <b-row id=zodiacSigns>
    <div data-aos="fade-down">
      <router-link :to="{path:'Details/0'}"><b-col><img class="zodiacImage m-3" src="../assets/zodiac_signs/aquarius_.png" /></b-col></router-link>
      <p>January 21 - February 18</p>
    </div>
    <div data-aos="fade-left">
      <router-link :to="{path:'Details/1'}"><b-col><img class="zodiacImage m-3" src="../assets/zodiac_signs/aries_.png" /></b-col></router-link>
      <p>March 21 - April 19</p>
    </div>
    <div data-aos="fade-right">
      <router-link :to="{path:'Details/2'}"><b-col><img class="zodiacImage m-3" src="../assets/zodiac_signs/cancer_.png" /></b-col></router-link>
      <p>June 21 - July 22</p>
    </div>
    <div data-aos="fade-down">
      <router-link :to="{path:'Details/3'}"><b-col><img class="zodiacImage m-3" src="../assets/zodiac_signs/capricorn_.png" /></b-col></router-link>
      <p>December 21 - January 20</p>
    </div>
    <div data-aos="fade-up">
      <router-link :to="{path:'Details/4'}"><b-col><img class="zodiacImage m-3" src="../assets/zodiac_signs/gemini_.png" /></b-col></router-link>
      <p>May 21 - June 20</p>
    </div>
    <div data-aos="fade-down">
      <router-link :to="{path:'Details/5'}"><b-col><img class="zodiacImage m-3" src="../assets/zodiac_signs/leo_.png" /></b-col></router-link>
      <p>July 23 - August 22</p>
    </div>
    <div data-aos="fade-left">
      <router-link :to="{path:'Details/6'}"><b-col><img class="zodiacImage m-3" src="../assets/zodiac_signs/libra_.png" /></b-col></router-link>
      <p>September 23 - October 22</p>
    </div>
    <div data-aos="fade-down">
      <router-link :to="{path:'Details/7'}"><b-col><img class="zodiacImage m-3" src="../assets/zodiac_signs/pisces_.png" /></b-col></router-link>
      <p>February 19 - March 20</p>
    </div>
    <div data-aos="fade-up">
      <router-link :to="{path:'Details/8'}"><b-col><img class="zodiacImage m-3" src="../assets/zodiac_signs/sagittarius_.png" /></b-col></router-link>
      <p>November 22 - December 21</p>
    </div>
    <div data-aos="fade-right">
      <router-link :to="{path:'Details/9'}"><b-col><img class="zodiacImage m-3" src="../assets/zodiac_signs/scorpio_.png" /></b-col></router-link>
      <p>October 23 - November 21</p>
    </div>
    <div data-aos="fade-left">
      <router-link :to="{path:'Details/10'}"><b-col><img class="zodiacImage m-3" src="../assets/zodiac_signs/taurus_.png" /></b-col></router-link>
      <p>April 20 - May 20</p>
    </div>
    <div data-aos="fade-down">
      <router-link :to="{path:'Details/11'}"><b-col><img class="zodiacImage m-3" src="../assets/zodiac_signs/virgo_.png" /></b-col></router-link>
      <p>August 23 - September 22</p>
    </div>
    </b-row>
  </b-container>
</template>

<script>

import json from '../assets/zodiacs.json'
new Date().toLocaleString()

  export default {
    name: "zodiacs",
    data() {
      return {
        zodiac_sign: json,
      }
    }
  }
</script>

<style>

@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.zodiacImage {
  width: 200px;
  height: 200px;
  filter: drop-shadow(0px 0px 10px rgb(255, 255, 255));
  display: block;
  transition: transform .2s;
}

.zodiacImage:hover {
  -ms-transform: scale(1.2); /* IE 9 */
  -webkit-transform: scale(1.2); /* Safari 3-8 */
  transform: scale(1.2); 
}

</style>