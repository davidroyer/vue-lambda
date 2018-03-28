<template lang="html">
<div class="login">
  <!-- Add a menu:
 Log in / Sign up - when the user is not logged in
 Username / Log out - when the user is logged in
-->
<button @click="handleLogin">Login</button>
<button @click="handleLogout">Logout</button>
</div>
</template>

<script>
/* eslint-disable */
import netlifyIdentity from 'netlify-identity-widget'
window.netlifyIdentity = netlifyIdentity
// You must run this once before trying to interact with the widget
netlifyIdentity.init()


// netlifyIdentity.open("signup"); // open the modal to the signup tab


// Close the modal
// netlifyIdentity.close();

// Logout the user
// Get the current user:


export default {
  name: 'Login',
  data() {
    return {
      user: {}
    }
  },
  created() {
   netlifyIdentity.on("init", user => console.log(user));
   netlifyIdentity.on("login", login => console.log(user));
   netlifyIdentity.on("logout", () => console.log("Logged out"));
   netlifyIdentity.on("error", err => console.error("Logged out"));
   netlifyIdentity.on("open", () => console.log("Widget opened"));
   netlifyIdentity.on("close", () => console.log("Widget closed"));
   const user = netlifyIdentity.currentUser();
   console.log(user);
   this.user = user
 },
 methods: {
   handleLogin() {
     netlifyIdentity.open(); // open the modal
   },
   handleLogout() {
     netlifyIdentity.logout();
   }
 }
}
</script>

<style lang="css">
</style>
