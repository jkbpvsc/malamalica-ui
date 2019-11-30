<template>
    <div class="center-aligned">
        <h1>New Post</h1>
        <div>
            <label for="title">Title</label>
            <br/>
            <input type="text" id="title" name="title" v-model="form.title"/>
            <br/>
            <br/>
            <label for="location">Category</label>
            <br/>
            <input type="text" id="category" name="category" v-model="form.category"/>
            <br/>
            <br/>
            <label for="category">Location</label>
            <br/>
            <input type="text" id="location" name="location" v-model="form.location"/>
            <br/>
            <br/>
            <label for="description">Description</label>
            <br/>
            <textarea id="description" name="description" v-model="form.description"></textarea>
            <br/>
            <br/>
            <button value="Submit" v-on:click="submit">Submit</button>
        </div>
    </div>
</template>

<script>
    import { createPost } from "../controllers/api";

    export default {
        name: "NewPost",
        data: () => ({
            form: {
                title: '',
                category: '',
                location: '',
                description: '',
            },
            post: null
        }),
        methods: {
            async submit() {
                const { title, category, location, description } = this.form;
                this.post = await createPost(
                    { title, category, location, description },
                    this.$store.getters.accessToken,
                )
            }
        }
    }
</script>

<style scoped>
    form {
        text-align: left;
    }
    .center-aligned {
        max-width: 300px;
        margin: auto;
    }

    input, textarea, button {
        margin: auto;
        width: 28em;
    }

</style>