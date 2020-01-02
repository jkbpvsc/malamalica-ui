<template>

    <b-container>
        <b-spinner v-if="!loaded"></b-spinner>
        <div v-if="loaded">
            <b-card
                    title="My Bids"
                    class="card-l"
            >
            </b-card>

            <br/>
            <b-list-group
                    class="card-l">
                <b-list-group-item
                        v-for="bid in bids"
                        v-bind:key="bid.id"
                        :to="`/post/${bid.post_id}/bid/${bid.id}`"
                >

                    <b-badge style="float: right; margin-left: 1em;" variant="info">{{ bid.repliesCount }} </b-badge>
                    <b-badge style="float: right" variant="success">{{ bid.value}} €</b-badge>
                    {{ bid.message }}

                </b-list-group-item>
            </b-list-group>
            <b-alert :show="bids.length === 0" variant="light">Prazno</b-alert>
        </div>
    </b-container></template>

<script>
    import {getMyBids} from "../controllers/api";

    export default {
        name: "MyBids",
        data: () => ({
            loaded: false,
            post: null,
            bids: [],
        }),
        methods: {
            async loadBids() {
                this.bids = await getMyBids(
                    this.$store.getters.accessToken,
                );
            }
        },
        async mounted() {
            await Promise.all(
                [
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
