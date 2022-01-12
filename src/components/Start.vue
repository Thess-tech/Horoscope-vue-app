<template>
<div class="Mynavbar">
  <b-navbar toggleable="lg" type="dark" class="text">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-item router-link :to="{ name: 'zodiacs', hash: '#zodiacSigns'}">Zodiac sign</b-nav-item>
        <b-nav-item router-link :to="{ name: 'main', hash: '#zodiacToday'}"> Todays Horoscope </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

</script>

<style>
.Mynavbar {
  text-align: center;
}
.text {
  font-size: 2em;
  text-decoration: none;
}

.text a {
  color:rgb(232, 234, 255);
}

.text a:hover {
  text-shadow: 0 0 5px #fff,0 0 10px #fff,0 0 15px #fff,0 0 20px #228dff,0 0 35px #228dff,0 0 40px #228dff;
}
</style>