<template>
  <v-container>
    <v-img lazy-src="../assets/cropped-applogo-1.png" max-height="150" max-width="250"
      src="../assets/cropped-applogo-1.png" style="margin: 10% auto 0 auto;"></v-img>
    <v-img lazy-src="../assets/applogo2.png" max-height="150" max-width="250" src="../assets/applogo2.png"
      style="margin: 0 auto 10% auto;"></v-img>
    <div v-if="authUser">
      <h2>Signed in as {{ authUser.email }}</h2>
    </div>
    <div v-else>
      <h2>Sign In!</h2>
      <v-form ref="form" class="mx-2" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="password" type="password" :rules="passwordRules" label="Password" required>
            </v-text-field>
          </v-col>
        </v-row>

        <v-checkbox v-model="firstcheckbox" :rules="[v => !!v || 'You must agree to continue!']"
          label="I agree with Terms and Conditions" required></v-checkbox>

        <v-btn class="darken-2 mt-5" @click="register">
          Log In
        </v-btn><br>

        <v-btn class="darken-2 mt-5" @click="signInWithGoogle">
          Sign In With Google
        </v-btn>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
export default {
  name: "RegisterForm",
  data: () => ({
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    retypepassword: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
    ],
    firstcheckbox: false,
    authUser: null
  }),
  methods: {
    register() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(() => {
          console.log('Successfully signed in')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created() {
    onAuthStateChanged(user => { this.authUser = user })
  }
};
</script>