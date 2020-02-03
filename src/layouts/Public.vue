<template>
  <v-app
    id="login-home"
  >
    <locale-changer/>

    <transition mode="out-in">
      <router-view/>
    </transition>

  </v-app>
</template>

<script>
export default {
}
</script>

<style>
</style>
