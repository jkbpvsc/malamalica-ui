<template>
  <b-container class="hello">
    <b-jumbotron
      header="Mala malica"
    >
      <p>Kjer je iskanje pomoci mala malica</p>
    </b-jumbotron>
    <b-list-group>
      <post-element v-for="post in posts" v-bind:key="post.id" v-bind:post="post">
      </post-element>
    </b-list-group>
    <b-spinner v-if="posts.length === 0" class="m-5" label="Busy"></b-spinner>
  </b-container>
</template>

<script>
import { getPosts } from "../controllers/api";
import PostElement from "./PostElement";

export default {
  name: 'HelloWorld',
  data: () => ({
    posts: []
  }),
  components: {
    'post-element': PostElement
  },
  computed: {
  },
  async mounted() {
    this.posts = await getPosts();
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
</style>
