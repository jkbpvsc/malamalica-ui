<template>
    <div>
        <div>Ali se res zelite odjaviti?</div>
        <br/>
        <a class="gidc-button" v-on:click="logout">Odjava</a>
    </div>
</template>

<script>
    export default {
        name: "Log out",
        methods: {
            logout() {
                this.$store.commit('logout');
                window.localStorage.removeItem('token');
            }
        }
    }
</script>

<style scoped>
    .gidc-button {
        margin: auto;
    }
</style>