import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {
    theme: {
        dark: false,
        themes: {
            light: {
                primary: colors.teal,
                secondary: colors.indigo,
                inputscreen: '#C9FDBB',
                accent: colors.shades.black, 
                error: colors.red.accent3,
            },
            dark: {
                primary: colors.indigo.darken4,
                secondary: colors.indigo.lighten2,
                inputscreen: '#2b2b2b',
                accent: colors.indigo.darken3,
            }
        }
    }
};

export default new Vuetify(opts);