<template lang="html">
  <div id="login" class="login">

    <button @click="handleLogin">Login</button>
    <button @click="handleLogout">Logout</button>
    <div class="user">
      <h3 class="user-name"><strong>USER:</strong>{{user.user_metadata.full_name}}</h3>
      <!-- <h3 class="user-name"><strong>USER:</strong>David Royer</h3> -->
      <img class="avatar"  :src="user.user_metadata.avatar_url" alt="Avatar For User">
      <!-- <img class="avatar" src="https://avatars3.githubusercontent.com/u/8834693?v=4" alt=""> -->
    </div>

  </div>
</template>

<script>
/* eslint-disable */
import netlifyIdentity from 'netlify-identity-widget'
window.netlifyIdentity = netlifyIdentity
netlifyIdentity.init();

export default {
  name: 'Login',
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    // You must run this once before trying to interact with the widget

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
.user {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background: #333;
  padding: 1em;
  color: white;
}

.user-name strong {
  margin-right: .5em;
  font-weight: 900;
}
img.avatar {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    width: 200px;
}
</style>
