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
                 <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>System Title</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                     
                      v-model="name"
                      label="Name"
                      color="primary"
                      :rules="nameRules"
                      required
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
      </v-form>    

            </v-card-text>
            <v-card-actions class="pb-2">
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid" color="primary" @click="save()">Save</v-btn>
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
      lazy: false,
      name: this.$root.system,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 40) || 'Name must be less than 40 characters',
      ],
      valid: true,
    };
  },
  create(){
    

  },
  computed: {

  },
  methods: {
    save() {}
  }
};
</script>
