<template>
    <v-container fluid>
        <v-infinite-scroll height="100%" :onLoad="onLoadArticles">
            <v-row justify="space-between" no-gutters v-for="article in articles">
                <v-col cols="12" class="d-flex justify-space-between">
                    <div class="d-flex">
                        <v-avatar size="50" image="/vuemastery_logo.png"></v-avatar>
                        <p class="ml-2 mt-2">
                            <strong>Vue Mastery</strong>
                            <span class="ml-2">@vuemastery</span>
                            <span class="ml-2">{{ new Date(article.publishedAt).toLocaleDateString('en-US', {
            month:
                'short', day: 'numeric'
        }) }}</span>
                        <p>{{ article.description }}</p>
                        <v-row>
                            <v-col cols="4">
                                <v-icon icon="mdi-chat-outline">
                                </v-icon>
                            </v-col>
                            <v-col cols="4">
                                <v-icon icon="mdi-repeat-variant"></v-icon>
                            </v-col>
                            <v-col cols="4">
                                <v-icon icon="mdi-heart-outline"></v-icon>
                            </v-col>
                        </v-row>
                        </p>
                    </div>
                    <x-button>Promote</x-button>
                </v-col>
            </v-row>
            <template v-slot:error>
                <v-alert type="error">An error occurred!</v-alert>
            </template>
            <template v-slot:empty>
                <v-alert type="info">No more items to show!</v-alert>
            </template>
        </v-infinite-scroll>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const articles = ref([])
const totalNumberOfArticles = ref(0)
const nextPage = ref(1)
const apiKey = import.meta.env.VITE_API_KEY

const fetchArticles = async (page = 1, pageSize = 10) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`)
        if (!response.ok) {
            throw new Error("Error fetching articles")
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
}

const onLoadArticles = async ({ done }) => {
    if (articles.value.length >= totalNumberOfArticles.value && totalNumberOfArticles > 0) {
        done("empty")
        return
    }
    try {
        const { totalResults, articles: articlesData } = await fetchArticles(nextPage.value)
        articles.value = articles.value.concat(articlesData)
        nextPage.value += 1
        totalNumberOfArticles.value = totalResults
        done("ok")
    } catch (error) {
        console.error(error)
        done("error")
    }
}
</script>