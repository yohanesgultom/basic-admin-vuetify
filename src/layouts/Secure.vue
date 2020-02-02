<template>
  <v-content>
    <v-app
      id="dashboard-view"
    >
      <core-filter />

      <core-toolbar />

      <core-drawer />

      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-app>
  </v-content>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$t('dashboard') + ' | ' + this.$t('title')
    }
  }
}
</script>
