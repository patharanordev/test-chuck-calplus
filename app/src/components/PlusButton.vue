<template>
  <v-container>

    <v-row no-gutters>
      <v-col cols="12" sm="12">
        <div class="text-center">
          <v-btn @click="pressPlusBtn()" block color="error">
            <h2><strong>+</strong></h2>
          </v-btn>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        result: 0
      }
    },
    methods: {
      normalize: function (str) {
        return str.replace(/\W*/g,'');
      },
      pressPlusBtn: async function() {
        let numberInPanel1 = this.$store.getters.numberInPanel(1);
        let numberInPanel2 = this.$store.getters.numberInPanel(2);

        await axios({
          method: 'POST',
          url: `${process.env.VUE_APP_BASE_URL}/plus`,
          data: { 'number1':this.normalize(numberInPanel1), 'number2':this.normalize(numberInPanel2) }
        }).then((res) => {
          console.log('data:', res.data.data);
          this.$store.commit('updateResult', { result:res.data.data });
        });
      }
    }
  }
</script>