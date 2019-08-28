<template>
  <v-list dense expand>
    <template v-for="item in menus">
      <template v-if="item.group">
        <v-list-group :key="item.title" :prepend-icon="item.icon" :value="item.open">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </template>

          <template v-for="subitem in item.items">
            <template v-if="subitem.children">
              <v-list-group :key="subitem.title" no-action sub-group value="true">
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{subitem.title}}</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item v-for="grand in subitem.children" :key="grand.title" link :to="grand.component">
                  <v-list-item-title v-text="grand.title"></v-list-item-title>
                  <!-- <v-list-item-icon>
              <v-icon v-text="grand.icon"></v-icon>
                  </v-list-item-icon>-->
                </v-list-item>
              </v-list-group>
            </template>

            <template v-else>
              <v-list-item :key="subitem.title" link :to="subitem.component">
                <v-list-item-icon>
                  <v-icon>{{subitem.icon}}</v-icon>
                </v-list-item-icon>

                <v-list-item-title>{{subitem.title}}</v-list-item-title>
              </v-list-item>
            </template>
          </template>
        </v-list-group>
      </template>

      <template v-else>
        <v-list-item :key="item.title" :to="item.component" link>
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </template>
    </template>
  </v-list>
</template>
<script>
import menu from "../api/menu";
export default {
  data: () => ({
    menus: menu
  })
};
</script>