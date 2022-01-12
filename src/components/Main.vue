<template>
<div  id=zodiacToday data-aos="zoom-in" class="main page container">
    <br>
    <br>
    <b-dropdown size="lg" :text='$zodiacName' class="m-2">
    <b-dropdown-item @click.native="getZodiacSign('Aries')">Aries</b-dropdown-item>
    <b-dropdown-item @click.native="getZodiacSign('Taurus')">Taurus</b-dropdown-item>
    <b-dropdown-item @click.native="getZodiacSign('Gemini')">Gemini</b-dropdown-item>
    <b-dropdown-item @click.native="getZodiacSign('Cancer')">Cancer</b-dropdown-item>
    <b-dropdown-item @click.native="getZodiacSign('Leo')">Leo</b-dropdown-item>
    <b-dropdown-item @click.native="getZodiacSign('Virgo')">Virgo</b-dropdown-item>
    <b-dropdown-item @click.native="getZodiacSign('Libra')">Libra</b-dropdown-item>
    <b-dropdown-item @click.native="getZodiacSign('Scorpio')">Scorpio</b-dropdown-item>
    <b-dropdown-item @click.native="getZodiacSign('Sagittarius')">Sagittarius</b-dropdown-item>
    <b-dropdown-item @click.native="getZodiacSign('Capricorn')">Capricorn</b-dropdown-item>
    <b-dropdown-item @click.native="getZodiacSign('Aquarius')">Aquarius</b-dropdown-item>
    <b-dropdown-item @click.native="getZodiacSign('Pisces')">Pisces</b-dropdown-item>
  </b-dropdown>
  <br>
  <br>
  <br>
        <!-- <div class="card card-background" style="width: 30rem; margin: 0 auto;">
         <img :src="require('../assets/zodiac_images/' + $zodiacName + '.webp')"/>
            <div class="card-body">
              <h5 class="card-title text">{{$zodiacName}}</h5>
              <p class="card-text"> {{data.current_date}}</p>
              <p class="card-text">{{data.date_range}}</p>
              <p class="list-group-item card-background card-text">{{data.description}}</p></div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item card-background card-text">Lucky Number: {{data.lucky_number}}</li>
                <li class="list-group-item card-background card-text">Lucky Time: {{data.lucky_time}}</li>
                <li class="list-group-item card-background card-text">Color: {{data.color}}</li>
                <li class="list-group-item card-background card-text">Mood: {{data.mood}}</li>
                </ul>
            <template>
            <div>
                <b-button @click="getYesterday($zodiacName)" variant="outline-secondary"><b-icon icon="arrow-left-short"></b-icon>Yesterday</b-button>
                <b-button @click="getToday($zodiacName)" class="mx-4">Today</b-button>
                <b-button @click="getTomorrow($zodiacName)" class="my-4" variant="outline-secondary">Tomorrow<b-icon icon="arrow-right-short"></b-icon></b-button>
            </div>
            </template>
      </div> -->

<div class="card mb-3 card-background" style="max-width: 100%;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="require('../assets/zodiac_images/' + $zodiacName + '.webp')" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title card-text">{{$zodiacName}}</h5>
        <p class="card-text"> {{data.current_date}}</p>
        <p class="card-text">{{data.date_range}}</p>
        <p class="card-text">{{data.description}}</p>
        <p class="card-text">Lucky Number: {{data.lucky_number}}</p>
        <p class="card-text">Lucky Time: {{data.lucky_time}}</p>
        <p class="card-text">Color of the day: {{data.color}}</p>
        <p class="card-text">Mood: {{data.mood}}</p>
      </div>
    </div>
  </div>
</div>

              <div>
                <b-button @click="getYesterday($zodiacName)" variant="outline-secondary"><b-icon icon="arrow-left-short"></b-icon>Yesterday</b-button>
                <b-button @click="getToday($zodiacName)" class="mx-4">Today</b-button>
                <b-button @click="getTomorrow($zodiacName)" class="my-4" variant="outline-secondary">Tomorrow<b-icon icon="arrow-right-short"></b-icon></b-button>
            </div>



  </div>
</template>

<script>

import jsonFile from "../assets/zodiacs.json"
import axios from 'axios'
import Vue from 'vue'


Vue.prototype.$zodiacName = "Zodiac" //lägger in en sträng i $zodiacname för att sidan ska renderas. Detta ändras längre ner när användaren väljer ett tecken

export default {
    name: "main",
    data() {
            return {
            zodiac_images: jsonFile,
            data: {},
            animate: true,
            zodiac_sign: String,
            selectedToday: "today",
            selectedTomorrow: "tomorrow",
            selectedYesterday:"yesterday"
          }
    },
    created() {

    this.$forceUpdate()

    console.log(this.$forceUpdate())

    },

     methods: {
          
                getZodiacSign: function(sign) { //hämtar in värde från clickevent och lägger värdet (string) i parameter sign.

                const URL = "https://aztro.sameerkumar.website/?sign=" + sign + "&day=" + this.selectedToday + ""; //hämtar API ur och som läggs i variabeln URL och lägger till värden från parametern sign och selectedToday. 

                Vue.prototype.$zodiacName = sign; //lägger värdet från sign i en global variabel 
                console.log(URL);

                        axios.post(URL).then((response) => { //retunerar data från api.t i data som visas i template
                        this.data = response.data
                  })
        
        },
                getYesterday: function($zodiacName) { //tar med den globala variabeln som innehåller värdet i sign. 

                const URL = "https://aztro.sameerkumar.website/?sign=" + $zodiacName + "&day=" + this.selectedYesterday + ""; //gör samma som ovan men använder istället selected yesterday för att ändra strängen i apit för att hämta data från det valda tecknet i zodiacname.
                console.log(URL);

                        axios.post(URL).then((response) => {
                        this.data = response.data
                  })
        },
                getTomorrow: function($zodiacName) {

                const URL = "https://aztro.sameerkumar.website/?sign=" + $zodiacName + "&day=" + this.selectedTomorrow + ""; //samma som ovan men nästkommande dag


                console.log(URL);

                        axios.post(URL).then((response) => {
                        this.data = response.data
                  })
        },
                getToday: function($zodiacName) {

                const URL = "https://aztro.sameerkumar.website/?sign=" + $zodiacName + "&day=" + this.selectedToday + ""; //samma som ovan för att komma tillbaka till today

                console.log(URL);

                        axios.post(URL).then((response) => {
                        this.data = response.data
                  })
        }
     }
}
  



</script>

<style>
#zodiacToday {
  height: 700px;
}
.text, .card-text{
  font-weight: bold;
  color: lightgray;
}

.card-background {
  background: #121a24;
}
</style>