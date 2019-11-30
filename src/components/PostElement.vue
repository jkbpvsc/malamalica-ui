<template>
    <b-list-group-item button v-b-modal="`modal-${post.id}`">
        <b>{{post.title}}</b> [{{ post.category }}] - {{ post.location }}
        <b-modal
                :id="`modal-${post.id}`"
                centered
        >
            <b-container>
                <b-row>
                    <b>Naslov: </b> {{ post.title }}
                </b-row>
                <b-row>
                    <b>Kategorija: </b> {{ post.category }}
                </b-row>
                <b-row>
                    <b>Lokacija: </b> {{ post.location }}
                </b-row>
                <b-row>
                    <b>Opis: </b> {{ post.description }}
                </b-row>
            </b-container>
        </b-modal>
    </b-list-group-item>
</template>

<script>
    export default {
        name: "PostElement",
        props: {
            post: Object,
        }
    }
</script>

<style scoped>

</style>