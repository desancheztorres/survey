<template>
  <div>
    <form>
      <v-card
          class="pa-md-4 mx-lg-auto"
          max-width="344"
          outlined
      >
        <section v-if="step === 1">
          <h3>Age</h3>
          <label>Please tell us your age?</label>
          <v-select
              v-model="form.age"
              :items="ages"
              return-object
              single-line
          ></v-select>
        </section>

        <section v-if="step === 2">
          <h3>Animals</h3>
          <label for="animal">From the following list, which of these animals is your favourite?</label>
          <v-select
              v-model="form.animals"
              :items="animals"
              label="Select"
              multiple
              chips
              persistent-hint
          ></v-select>
        </section>

        <section v-if="step === 3">
          <h3>Favourite</h3>
          <label for="favourite">
            What do you like about this <span v-for="animal in form.animals" :key="animal">{{ animal }}, </span>?
          </label>
          <v-text-field
              v-model="form.favourite"
              label="Outlined"
              placeholder="Placeholder"
              outlined
          ></v-text-field>
        </section>

        <v-card-actions>
          <v-btn
              class="pr-4"
              v-if="step !== 1"
              @click.prevent="previousStep"
              outlined
              rounded
              text
          >
            Previous Step
          </v-btn>
          <v-btn
              v-if="step !== steps"
              @click.prevent="nextStep"
              outlined
              rounded
              text
          >
            Next Step
          </v-btn>

          <template v-if="step === steps">
            <div class="text-center">
              <v-dialog
                  v-model="dialog"
                  width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      color="red lighten-2"
                      outlined
                      rounded
                      text
                      v-bind="attrs"
                      v-on="on"
                  >
                    Submit
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline grey lighten-2">
                    Survey
                  </v-card-title>

                  <v-card-text>
                    Age: {{ form.age }}
                    Animal: {{ form.animal }}
                    Favourite: {{ form.favourite }}
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                    >
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </template>
        </v-card-actions>
      </v-card>

    </form>

  </div>
</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      dialog: false,
      steps: 3,
      step: 1,
      ageSelected: "Under 18",
      ages: [
        "Under 18",
        "18-30",
        "31-45",
        "45-60",
        "60+"
      ],
      animals: [
        "Rabbit",
        "Cat",
        "Dog",
        "Goldfish"
      ],
      form: {
        age: null,
        animals: [],
        favourite: null

      }
    }
  },
  validations: {
    favourite: {
      required,
      minLength: minLength(5)
    },
  },
  methods: {
    nextStep() {
      this.step++
    },
    previousStep() {
      this.step--
    },
    submit() {
      console.log(this.form)
    }
  }

}
</script>