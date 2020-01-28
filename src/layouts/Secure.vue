<template>
  <v-content>
    <v-app>
      <core-filter />

      <core-toolbar />

      <core-drawer />

      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-app>
  </v-content>
</template>
