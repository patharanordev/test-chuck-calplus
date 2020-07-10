<template>
  <v-container>

    <v-row no-gutters>
      <v-col cols="12" sm="12">
        <div class="text-center">
          <v-textarea
            outlined
            name="result-area"
            label="Result"
            :value="this.$store.getters.result | numFormat"
            @keypress="onKeyPress($event)"
          ></v-textarea>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  import numFormat from '../plugins/filter';
  export default {
    filters: {
      numFormat
    },
    methods: {
      onKeyPress(evt) {
        evt.preventDefault();
      }
    }
  }
</script>