<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = true" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>Vue Login</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded class="hidden-xs-only">Home</v-btn>
      <v-btn text rounded class="hidden-xs-only">Login</v-btn>
      <v-btn text rounded class="hidden-xs-only">About</v-btn>
      <v-btn text rounded class="hidden-xs-only">Contact us</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact Us</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
