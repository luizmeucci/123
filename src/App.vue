<template>
  <div>
    <v-app>
  
      <AppTopBar/>
     <v-main>
      <v-container>
        <router-view/>
      </v-container>
     </v-main>

    </v-app>
   
  </div>
</template>

<script>
import AppTopBar from './components/AppTopBar'
export default {
  name: 'App',
  

  components: {
       AppTopBar
  }
};
</script>


