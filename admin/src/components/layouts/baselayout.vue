<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <leftmenu/>
    </v-navigation-drawer >

    <v-app-bar app class="secondary" dark>
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{this.$root.system}} Admin</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
          <div class="page-wrapper">
           <router-view></router-view>
       </div>
      </v-container>
      
    </v-content>
    
  </v-app>
</template>
<script>
import leftmenu from "../leftmenu";
export default {
    components: {
        leftmenu
    },
    props: {
        source: String
    },
    data: () => ({
        drawer: null,

    })
};
</script>
