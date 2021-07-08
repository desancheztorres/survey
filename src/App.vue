<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Survey
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <survey-form></survey-form>
    </v-main>
  </v-app>
</template>

<script>

import SurveyForm from "./components/SurveyForm";

export default {
  name: 'App',

  components: {
    SurveyForm
  },

  data: () => ({
    //
  }),
};
</script>
