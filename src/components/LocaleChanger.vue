<template>
<div class="text-xs-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn flat v-on="on">
          <img height="20px" :src="langs.find(x => x.value === $i18n.locale).img"/>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in langs"
          :key="index"
          @click="$i18n.locale = item.value"
        >
          <v-list-tile-title class="text-xs-center">
            <img height="20px" :src="item.img" />
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>  
</template>

<script>
export default {
  name: 'LocaleChanger',
  data () {
    return {
      langs: [
        { value: 'id', label: `🇮🇩 Indonesia`, img: 'img/flags/Indonesia.png' },
        { value: 'en', label: `🇬🇧 English`, img: 'img/flags/United-Kingdom.png' }
      ]
    }
  }
}
</script>
