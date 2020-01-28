<template>
  <main>
    <transition mode="out-in">
      <router-view/>
    </transition>

    <!-- Global overlay -->
    <div
      v-show="overlay"
      class="overlay">
      <v-progress-circular
        class="overlay-text"
        indeterminate
        size="64"/>
    </div>

  </main>
</template>

<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>

<script>
/* eslint-disable no-console */
export default {
  computed: {
    overlay: {
      get: function () {
        return this.$store.state.overlay
      },
      set: function (val) {
        // only update when false (overlay closed)
        if (!val) {
          this.$store.commit('update', { overlay: false })
        }
      }
    }
  }
}
</script>
