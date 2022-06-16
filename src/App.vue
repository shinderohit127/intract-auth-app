<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = true" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>Intract Authentication System</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded class="hidden-xs-only" to="/">Home</v-btn>
      <v-btn text rounded class="hidden-xs-only" to="/login">Login</v-btn>
      <v-btn text rounded class="hidden-xs-only" to="/register">Register</v-btn>
      <v-btn text rounded class="hidden-xs-only" to="/about">About</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/login">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <v-list-item to="/register">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"

let auth;

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    drawer: false,
    group: null,
    isLoggedIn: false,
  }),
  methods: {
    onMounted() {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.isLoggedIn = true;
        }
        else {
          this.isLoggedIn = false;
        }
      });
    },
    handleSignOut() {
      signOut(auth).then(() => {
        console.log("Sign out pressed");
        this.$router.push('/')
      })
    },
  }
};
</script>
