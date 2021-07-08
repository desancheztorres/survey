import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import survey from './modules/survey'

export default new Vuex.Store({
    modules: {
        survey
    }
})
