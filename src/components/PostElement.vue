<template>
    <b-list-group-item button v-b-modal="`modal-${post.id}`">
        <span class="left">
            <b>{{post.title}}</b>
            <b-badge class="list-badge">{{ post.category }} </b-badge>
        </span>
        <span class="right">
            <font-awesome-icon icon="map-marker-alt"/> {{ post.location }}
        </span>

        <b-modal
                :id="`modal-${post.id}`"
                centered
                hide-footer
                :title="post.title"
        >
            <b-container>
                <b-alert :show="successfulBid" dismissible variant="success">Uspesno ste se prijavili</b-alert>
                <b-card>
                    <font-awesome-icon icon="map-marker-alt"/> {{ post.location }}     
                    <b-badge class="right">{{ post.category }}</b-badge>
                </b-card>
                <br/>
                <b-card>
                    {{ post.description }}
                </b-card>

                <div v-if="!loading && !successfulBid">
                    <div v-if="this.$store.getters.authenticated && !replyWindowVisible">
                        <br/>
                        <b-button v-on:click="replyWindowVisible = true" variant="primary">Odpisi</b-button>
                    </div>

                    <div v-if="replyWindowVisible">
                        <br/>
                        <b-form-textarea
                                v-model="message"
                                placeholder="Sporocilo"
                                no-resize
                                rows="6"
                        ></b-form-textarea>
                        <br/>
                        <b-input-group
                                label="Znesek"
                                prepend="€"
                        >
                            <b-form-input
                                    number
                                    v-model="value"
                                    placeholder="Po dogovoru"
                            ></b-form-input>
                        </b-input-group>
                        <br/>
                        <b-button v-on:click="postBid">Poslji</b-button>
                    </div>
                </div>
                <br/>
            </b-container>
        </b-modal>
    </b-list-group-item>
</template>

<script>
    import { postBid } from '../controllers/api';

    export default {
        name: "PostElement",
        props: {
            post: Object,
        },
        data: function () {
            return {
                successfulBid: false,
                replyWindowVisible: false,
                message: '',
                value: null,
            }
        },
        methods: {
            postBid: function () {
                const { message, value } = this;
                const post_id = this.post.id;
                postBid(
                    { message, value, post_id },
                    this.$store.getters.accessToken
                );
                this.successfulBid = true;
            }
        }
    }
</script>

<style scoped>
    .left {
        float: left;
    }

    .right {
        float: right;
    }

    .list-badge {
        margin-left: 1em;
    }

</style>