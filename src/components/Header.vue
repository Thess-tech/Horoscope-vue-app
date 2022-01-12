<template>
  <div>
    <section data-aos="zoom-in">
      <img src="../assets/star-signs/1.png" object-speed="-5" class="layer">
      <img src="../assets/star-signs/2.png" object-speed="5" class="layer">
      <img src="../assets/star-signs/3.png" object-speed="2" class="layer">
      <img src="../assets/star-signs/4.png" object-speed="6" class="layer">
      <img src="../assets/star-signs/5.png" object-speed="8" class="layer">
      <img src="../assets/star-signs/6.png" object-speed="-2" class="layer">
      <img src="../assets/star-signs/7.png" object-speed="2" class="layer">
      <img src="../assets/star-signs/8.png" object-speed="-3" class="layer">
      <img src="../assets/star-signs/9.png" object-speed="6" class="layer">
      <img src="../assets/star-signs/10.png" object-speed="-7" class="layer">
      <img src="../assets/star-signs/11.png" object-speed="-5" class="layer">
      <img src="../assets/star-signs/12.png" object-speed="2" class="layer">
      <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400"
     data-aos-offset="0" class="container text-center"><h1>Horoscope</h1></div>
      </section>
  </div>
</template>

<script>

import axios from 'axios'

const URL = 'https://aztro.sameerkumar.website/?sign=capricorn&day=today';

export default {
    data() {
            return {
            data: {},
        }
    },
    created() {
        axios.post(URL).then((response) => {
            this.data = response.data
        })
     
 },
 methods: {
                getZodiacSign: function(sign) {
                
                const zodiac_sign = sign;
                console.log(zodiac_sign);
        }
    }
    
    }
      document.addEventListener("mousemove", parallax);

         function parallax(e) {
          document.querySelectorAll(".layer").forEach((layer) => {
          const speed = layer.getAttribute('object-speed');
          const x = (window.innerWidth - e.pageX * speed) / 80;
          const y = (window.innerHeight - e.pageY * speed) / 80;

          layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
          });
      }

</script>

<style>

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -5;
}

section {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

section h1{
  color: rgb(27, 27, 27);
  font-size:8vw;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e7e7e7, 0 0 40px #e9e9e9, 0 0 50px #e7e7e7, 0 0 60px #e7e7e7, 0 0 70px #e7e7e7;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #e7e7e7, 0 0 40px #e7e7e7, 0 0 50px #e7e7e7, 0 0 60px #e7e7e7, 0 0 70px #e7e7e7, 0 0 80px #e7e7e7;
  }
}



</style>