const devEnv = (process.env.NODE_ENV !== 'production');

export default {
  dev: devEnv,
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // // With options
    // ['@nuxtjs/vuetify', { /* module options */ }]
  ]
};