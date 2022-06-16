import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { initializeApp } from "firebase/app";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDHVIHzxTiX4IIY849uO5fSUJlhKGsajD4",
  authDomain: "intract-auth-app.firebaseapp.com",
  projectId: "intract-auth-app",
  storageBucket: "intract-auth-app.appspot.com",
  messagingSenderId: "145811859709",
  appId: "1:145811859709:web:0102620d21611019c77694",
  measurementId: "G-0JCNS68LP4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')