<template>
<v-app>
  <AppTopBar/>
    <v-main>
      <v-container>
        <MeuInicio/>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MeuInicio from './components/Inicio.vue'
import AppTopBar from './components/shared/AppTopBar.vue'

export default {
  name: 'App',
  components: {
    MeuInicio,
    AppTopBar
  }
};
</script>
