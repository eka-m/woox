import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import {
  uniEstate,
  uniUser,
  uniBell,
  uniComment,
  uniFire,
} from 'vue-unicons/dist/icons'

Unicon.add([uniEstate, uniUser, uniBell, uniComment, uniFire])
Vue.use(Unicon)
