<template>
    <b-container>
        <b-spinner v-if="!loaded"></b-spinner>
        <div v-if="loaded">
            <b-card
                :title="post.title"
                class="card-l"
            >


                <b-card-text>
                    <font-awesome-icon icon="map-marker-alt"/> {{ post.location }}
                    <b-badge style="float: right">{{ post.category }} </b-badge>
                </b-card-text>

                <b-card-text>
                    {{ post.description }}
                </b-card-text>
            </b-card>

            <br/>
            <b-list-group
                    class="card-l">
                <b-list-group-item
                        v-for="bid in bids"
                        v-bind:key="bid.id"
                >

                    <b-badge style="float: right" variant="success">{{ bid.value}} €</b-badge>
                    {{ bid.message }}

                </b-list-group-item>
            </b-list-group>
            <b-alert :show="bids.length === 0" variant="light">Nic odzivov</b-alert>
        </div>
    </b-container>
</template>

<script>
    import { getBidsByPost, getPostById } from "../controllers/api";

    export default {
        name: "Post",
        data: () => ({
            loaded: false,
            post: null,
            bids: [],
        }),
        methods: {
            async loadPost() {
                this.post = await getPostById(
                    this.$route.params.id
                );
            },
            async loadBids() {
                this.bids = await getBidsByPost(
                    this.$route.params.id,
                    this.$store.getters.accessToken,
                );
            }
        },
        async mounted() {
            await Promise.all(
                [
                    this.loadPost(),
                    this.loadBids(),
                ]
            );
            this.loaded = true;
        }
    }
</script>

<style scoped>
    .card-l {
        text-align: left;
    }

</style>