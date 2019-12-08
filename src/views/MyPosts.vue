<template>
    <b-container class="hello">
        <b-jumbotron
                header="Vase objave"
        >

        </b-jumbotron>
        <b-list-group>
            <b-list-group-item
                    v-for="post in posts"
                    v-bind:key="post.id"
                    v-bind:post="post"
                    :to="`/post/${post.id}`"
            >
                <span class="left">
                    <b>{{post.title}}</b>
                    <b-badge class="list-badge">{{ post.category }} </b-badge>
                </span>
                <span class="right">
                    <font-awesome-icon icon="map-marker-alt"/> {{ post.location }}
                    <b-badge class="list-badge" variant="primary">{{post.bids}}</b-badge>
                </span>
            </b-list-group-item>
        </b-list-group>
        <b-spinner v-if="loading" class="m-5" label="Busy"></b-spinner>
        <b-alert variant="light" :show="posts.length === 0 && !loading">Prazno</b-alert>
    </b-container>
</template>

<script>
    import { getMyPosts } from "../controllers/api";

    export default {
        name: 'MyPosts',
        data: () => ({
            posts: [],
            loading: true,
        }),
        async mounted() {
            this.posts = await getMyPosts(this.$store.getters.accessToken);
            this.loading = false;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
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
