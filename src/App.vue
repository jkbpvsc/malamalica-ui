<template>
  <div id="app">
    <div id="nav">
        <router-link to="/">Domov</router-link> |
        <router-link v-if="!this.$store.getters.authenticated" to="/login">Prijava</router-link>
        <span v-if="this.$store.getters.authenticated">
            <router-link to="/post/new">Nov oglas</router-link> |
            <router-link to="/user/posts">Vasi oglasi</router-link> |
            <router-link to="/bids" >Moje Prosnje</router-link> |
            <router-link to="/logout" >Odjava</router-link>
        </span>
    </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
        mounted() {
            const accessToken = window.localStorage.getItem('token');
            if (accessToken) {
                this.$store.commit('authenticate', accessToken);
            }
        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
