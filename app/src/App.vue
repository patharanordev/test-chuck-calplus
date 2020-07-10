<template>
  <v-app dark>
    <v-flex>
      <div id="app">
        <ThemeToggle />
        <img alt="Vue logo" src="./assets/logo.png">
        <PanelInput1 panel-index="1"/>
        <PanelInput2 panel-index="2"/>
        <PlusButton />
        <Result />
      </div>
    </v-flex>
  </v-app>
</template>

<script>
import ThemeToggle from './components/Theme.vue'
import PanelInput1 from './components/Panel.vue'
import PanelInput2 from './components/Panel.vue'
import PlusButton from './components/PlusButton.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',
  components: {
    ThemeToggle,
    PanelInput1,
    PanelInput2,
    PlusButton,
    Result
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-btn {
  min-height: 80px;
}
</style>
