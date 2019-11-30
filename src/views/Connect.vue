<template>
    <div>
        GlobaliD Connect
        <br/>
        <div v-if="!this.$store.getter.authenticated">Connecting</div>
        <div v-if="this.$store.getter.authenticated">Successfully logged in</div>
    </div>
</template>

<script>
    import { handleOauthConnect } from "../controllers/api";

    export default {
        name: "Connect",
        methods: {

        },
        async mounted() {
            const accessToken = await handleOauthConnect(window.location.search);
            this.$store.commit('authenticate', accessToken);
            window.localStorage.setItem('token', accessToken)
        }
    }
</script>

<style scoped>

</style>