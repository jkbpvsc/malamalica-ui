<template>
    <b-container class="center-aligned">
        <b-jumbotron
            header="Nova objava"    
        >

        </b-jumbotron>
        <b-form class="form">
            <b-form-group
                id="title-group"
                label="Naslov"
                label-for="title"
            >
                <b-form-input
                    id="title"
                    required
                    v-model="form.title"
                />
            </b-form-group>


            <b-form-group
                id="category-group"
                label="Kategorija"
                label-for="category"
            >
                <b-form-select
                    id="category"
                    required
                    v-model="form.category"
                    :options="options"
                />
            </b-form-group>

            <b-form-group
                id="location-group"
                label="Lokacija"
                label-for="location"
            >
                <b-form-input
                    id="location"
                    required
                    v-model="form.location"
                />
            </b-form-group>
            
            
            <b-form-group
                id="description-group"
                label="Opis"
                label-for="description"
            >
                <b-form-textarea
                    id="description"
                    required
                    v-model="form.description"
                    rows=7
                />
            </b-form-group>
            
            
            <b-button value="Submit" v-on:click="submit">Objavi</b-button>
        </b-form>
    </b-container>
</template>

<script>
    import { createPost } from "../controllers/api";

    const getOption = name => ({ text: name, value: name });

    export default {
        name: "NewPost",
        data: () => ({
            form: {
                title: '',
                category: '',
                location: '',
                description: '',
            },
            post: null,
            options: [
              'Pomoc na domu',
              'Vrtna opravila',
              'Prevoz',
              'Cuvanje otrok',
              'Cuvanje hisnih ljubljenckov',
              'Fizicna dela'
            ].map(getOption),
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
    .form {
        text-align: left;
        display: inline-block;
    }

    input, textarea, button {
        width: 28em;
    }

</style>
