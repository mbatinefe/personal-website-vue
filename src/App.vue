<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
};
</script>

<style>

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%; 
  padding-top: 1rem;

  background-color: #6B6E70;
}

@media (min-width: 768px) {
  #app {
    max-width: 100%; 
    margin-left: auto; 
    margin-right: auto; 
  }
}

@media (min-width: 992px) {
  #app {
    max-width: 100%; 
  }
}


@media (min-width: 1200px) {
  #app {
    max-width: 100%; 
  }
}

</style>
