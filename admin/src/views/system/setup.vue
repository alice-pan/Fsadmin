<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>System Setup</h3>
        </v-flex>
        <v-flex sm8>
          <v-card>
            <v-card-text>
              <v-layout row>
                <v-flex xs4>
                  <v-subheader>System Title</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    :rules="rules.required"
                    name="input-1"
                    label="Name"
                    color="primary"
                    id="testing"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs4>
                  <v-subheader>Upload Logo</v-subheader>
                </v-flex>
                <v-flex xs8>
                 <v-file-input accept="image/*" label="File input"></v-file-input>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions class="pb-2">
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="save()">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {

  data() {
    return {
      email: "",
      rules: {
        required: value => !!value || "Required."
      }
    }
  },
  computed: {
      
  },
  methods: {
    
    save() {

    }
  }
}
</script>
