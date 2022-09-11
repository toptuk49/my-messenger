<template>
  <div id="App">
    <v-main-wrapper />
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'

export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>

<style lang="scss">
  #App {
    font-family: 'RobotoMono', sans-serif;
  }
</style>
