<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
                    Welcome to Intract Authentication System
                </h1>
                <br/><br/>
                <p class="subheading font-weight-regular">
                    This is a Vue JS application developed as a task submission for Intract Technologies. 
                    <br/><br/>This application is developed using Vue JS, components are made using Vuetify, state management is done using Vuex and local browser storage is used for persistent user authentication
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HelloWorld',

    data: () => ({
        ecosystem: [
            {
                text: 'vuetify-loader',
                href: 'https://github.com/vuetifyjs/vuetify-loader',
            },
            {
                text: 'github',
                href: 'https://github.com/vuetifyjs/vuetify',
            },
            {
                text: 'awesome-vuetify',
                href: 'https://github.com/vuetifyjs/awesome-vuetify',
            },
        ],
        importantLinks: [
            {
                text: 'Documentation',
                href: 'https://vuetifyjs.com',
            },
            {
                text: 'Chat',
                href: 'https://community.vuetifyjs.com',
            },
            {
                text: 'Made with Vuetify',
                href: 'https://madewithvuejs.com/vuetify',
            },
            {
                text: 'Twitter',
                href: 'https://twitter.com/vuetifyjs',
            },
            {
                text: 'Articles',
                href: 'https://medium.com/vuetify',
            },
        ],
        whatsNext: [
            {
                text: 'Explore components',
                href: 'https://vuetifyjs.com/components/api-explorer',
            },
            {
                text: 'Select a layout',
                href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
            },
            {
                text: 'Frequently Asked Questions',
                href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
            },
        ],
    }),
}
</script>
