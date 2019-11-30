<template>
    <div>
        <a
                class="gidc-button"
                :href="connectUrl"
        >
            Connect
        </a>
    </div>
</template>

<script>
    export default {
        name: "Login",
        computed: {
            connectUrl() {
                return process.env.VUE_APP_GIDC_URL
            }
        }
    }
</script>

<style scoped>
    .gidc-button {
        margin: auto;
    }
</style>