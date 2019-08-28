<template>
<div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Menu Settings</h3>
        </v-flex>
        <v-flex sm8>
  <v-data-table dense
    :headers="headers"
    :items="menulist"
    class="elevation-1"
    hide-default-footer
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        
        
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">add</v-btn>
            <v-btn color="primary" dark class="mb-2" @click="savetoserver">save</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.title" label="title"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.parameter" label="Parameter"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" v-if="show">
                    <v-text-field v-model="editedItem.active" label="Active"></v-text-field>
                  </v-col>
                 
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.drag="{ item }">
       <v-btn style="cursor: move" icon class="sortHandle"><v-icon>drag_handle</v-icon></v-btn>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        edit
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>

   </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import topMenu from "@/api/FuessMenuSetting"
import Sortable from "sortablejs"
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
            text: '',
            value:'drag'
        },
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id',
        },
        { text: 'Title', value: 'title' },
        { text: 'Parameter', value: 'parameter' },
        { text: 'Active', value: 'active' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      menulist: [],
      editedIndex: -1,
      editedItem: {
        title: '',
        parameter: '',
        active: '',
 
      },
      defaultItem: {
        title: '',
        parameter: '',
        active: '',
      },
    }),
    mounted(){
        let table = document.querySelector(".v-data-table tbody")
        const _self = this

        Sortable.create(table, {
        handle: ".sortHandle",
        onEnd({ newIndex, oldIndex }) {
            const row = _self.menulist.splice(oldIndex, 1)[0]
            _self.menulist.splice(newIndex, 0, row)
        }
        })
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Item' : 'Edit Item'
      },
      show(){
         return this.editedIndex === -1 ? false : true 
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.menulist = topMenu
      },

      editItem (item) {
        this.editedIndex = this.menulist.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.menulist.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.menulist.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      savetoserver(){
        console.log(this.menulist)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.menulist[this.editedIndex], this.editedItem)
        } else {
          this.menulist.push(this.editedItem)
          const index = this.basic.items.length + 1
          this.menulist.push({
            title: this.editedItem.title,
            parameter: this.editedItem.parameter,
            active: "active",
            order: index,
            id: index
          })
        }
        this.close()
      },
    },
  }
</script>