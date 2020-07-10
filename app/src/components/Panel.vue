<template>
  <v-container>

    <v-row no-gutters>
      <v-col cols="12" sm="12">
        <v-textarea
          filled
          outlined
          clearable
          name="input"
          label="Input"
          background-color="inputscreen"
          :value="this.$store.state.number[panelIndex] | numFormat"
          @input="value => setFormat(panelIndex, value)"
          @keypress="isNumber($event)"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        v-for="n in numberBtns"
        :key="n"
        cols="4"
        md="4"
      >
        <div v-if="n>-1" class="text-center">
          <v-btn @click="pressBtn(panelIndex, n)" block tile color="primary" dark>
            <h2><strong>{{ n }}</strong></h2>
          </v-btn>
        </div>
        <div v-else>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  import numFormat from '../plugins/filter';
  export default {
    props: {
      panelIndex: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        numberBtns: [1,2,3,4,5,6,7,8,9,-1,0,-1]
      }
    },
    filters: {
      numFormat
    },
    methods: {

      isNumber: function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 9)) {
          evt.preventDefault();
        } else {
          return true;
        }
      },

      setFormat: function(i, newValue) {
        console.log('on set format value :', newValue);
        this.$store.commit('setNumber', { 'index':i, 'value':newValue });
      },

      pressBtn: function(i, n) {
        console.log('on press :', { 'panelIndex':i, 'pressNumber':n });
        let existingNumber = this.$store.getters.numberInPanel(i);
        console.log('existingNumber:', existingNumber);
        let newValue = existingNumber + '' + n;
        console.log('newValue:', newValue);
        this.$store.commit('setNumber', { 'index':i, 'value':newValue });
      }

    }
  }
</script>