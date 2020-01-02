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
      <b-card class="card-l">
        <b-card-text>
          {{ bid.message }}
          <b-badge style="float: right" variant="success">{{ bid.value}} €</b-badge>
        </b-card-text>
      </b-card>
      <div v-for="message in messages" v-bind:key="message.id">
        <br/>
        <b-card v-bind:class="message.you ? 'message-you' : 'message-other'">
          <b-card-text>
            <b v-if="!message.you">{{ message.gid_name }}</b>
            {{ message.message }}
          </b-card-text>
        </b-card>
      </div>
      <br/>
      <b-card>
        <b-input style="display: inline-block; width: 90%; margin-right: 2em;" type="text" v-model="message"></b-input>
        <b-button style="display: inline-block" variant="primary" @click="postMessage">Poslji</b-button>
      </b-card>
    </div>
  </b-container>

</template>
<script>
  import {getBidById, getBidMessages, getPostById, postBidMessage} from "../controllers/api";

  export default {
    name: "Bid",
    data: () => ({
      loaded: false,
      post: null,
      bid: null,
      messages: [],
      user: null,
      message: ''
    }),
    methods: {
      async loadPost() {
        this.post = await getPostById(this.$route.params.post_id)
      },
      async loadBid() {
        this.bid = await getBidById(
                this.$route.params.bid_id,
                this.$store.getters.accessToken
        )
      },
      async loadMessages() {
        this.messages = await getBidMessages(
                this.$route.params.bid_id,
                this.$store.getters.accessToken
        )
      },
      async loadUser() {
      },
      async postMessage() {
        await postBidMessage(
                this.message,
                this.$route.params.bid_id,
                this.$store.getters.accessToken,
        );
      }
    },
    async mounted() {
     await Promise.all(
             [
                     this.loadPost(),
                     this.loadBid(),
                     this.loadMessages(),
             ]
     )
      this.loaded = true;
    }

  }
</script>


<style scoped>
  .card-l {
    text-align: left;
  }

  .message-you {
    text-align: right;
  }

  .message-other {
    text-align: left;
  }

</style>
