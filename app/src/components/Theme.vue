<template>
    <v-container>
        <v-row align="start" justify="end">
            <v-switch class="switch"
                inset 
                :input-value="isDark" 
                @change="toggleTheme()"
            ></v-switch>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                isDark: this.$vuetify.theme.dark
            }
        },
        methods: {
            toggleTheme: function() {
                console.log('Current theme:', this.$vuetify.theme.dark);
                this.isDark = !this.isDark
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
                console.log('Last theme:', this.$vuetify.theme.dark);

                const theme = this.isDark ? 'dark' : 'light';
                const value = this.$vuetify.theme.themes[theme]
                // this.$vuetify.theme.themes[theme] = {}
                // this.$vuetify.theme.themes[theme] = value
                this.$vuetify.theme.themes[theme]['primary'] = value.primary;
            }
        }
    }
</script>