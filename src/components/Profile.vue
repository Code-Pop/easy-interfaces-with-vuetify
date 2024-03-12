<template>
    <v-container class="w-50 pa-0">
        <v-img src="/vuemastery_header.png" height="300" cover></v-img>
        <v-container class="pa-0 px-6 profile">
            <v-row justify="space-between">
                <v-col cols="auto">
                    <v-avatar image="/vuemastery_logo.png" size="200"></v-avatar>
                </v-col>

                <v-col cols="auto" class="mt-6" align-self="center">
                    <v-btn variant="outlined" rounded="xl">Edit Profile</v-btn>
                </v-col>
            </v-row>

            <div class="pl-8">
                <h2 class="pt-4">Vue Mastery</h2>
                <p>@VueMastery</p>

                <p class="py-2">The ultimate learning platform for Vue.js developers. <br />Learn from the
                    experts,<br />
                    Elevate your code,<br /> Master your craft</p>

                <a href="vuemastery.com/courses">vuemastery.com/courses</a>
            </div>

            <v-row class="pl-6 pt-6">
                <v-col class="d-flex" cols="auto">
                    <v-icon icon="mdi-briefcase-outline"></v-icon>
                    <span>Science & Technology</span>
                </v-col>
                <v-col class="d-flex" cols="auto">
                    <v-icon icon="mdi-map-marker-outline">
                    </v-icon>
                    <span>Orlando, FL</span>
                </v-col>

                <v-col class="d-flex" cols="auto">
                    <v-icon icon="mdi-link-variant">
                    </v-icon>
                    <a href="vuemastery.com">vuemastery.com</a>
                </v-col>

                <v-col class="d-flex" cols="auto">
                    <v-icon icon="mdi-calendar-month">
                    </v-icon>
                    <span>Joined December, 2017</span>
                </v-col>
            </v-row>

            <v-row class="pl-6">
                <v-col cols="auto">
                    <h4>696 following</h4>
                </v-col>
                <v-col cols="auto">
                    <h4>24k followers</h4>
                </v-col>
            </v-row>

            <v-tabs class="pl-6" v-model="tab">
                <v-tab v-for="tab in tabList" :key="tab.value" :value="tab.value" color="blue">
                    {{ tab.title }}
                </v-tab>
            </v-tabs>

            <v-window v-model="tab">
                <v-window-item v-for="tab in tabList" :value="tab.value" :key="tab.value">
                    <component :is="tab.component" />
                </v-window-item>
            </v-window>
        </v-container>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import Tweet from './Tweet.vue';
import Replies from './Replies.vue';
import Highlights from './Highlights.vue';
import Media from './Media.vue';
import Likes from './Likes.vue';

const tab = ref(null)

const tabList = [{
    title: "Posts",
    value: "posts",
    component: Tweet
},
{
    title: "Replies",
    value: "replies",
    component: Replies
},
{
    title: "Highlights",
    value: "highlights",
    component: Highlights
},
{
    title: "Media",
    value: "media",
    component: Media
},
{
    title: "Likes",
    value: "likes",
    component: Likes
},]
</script>

<style>
.profile {
    margin: -100px;
}
</style>