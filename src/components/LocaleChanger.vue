<template>
  <div class="locale-changer">
    <v-select 
        v-model="$i18n.locale" 
        :items="langs" 
        item-value="value" 
        item-text="label"
        solo
    >
    </v-select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { 
        langs: [
            {value: 'id', label: `🇮🇩 Indonesia`}, 
            {value: 'en', label: `🇬🇧 English`}, 
        ] 
    }
  }
}
</script>