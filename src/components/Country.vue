<template>
    <div>
        <router-link :to="`/list/${alphaCode}`">
            <img v-if="countryCode" :src="`https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`" alt=" Test"
                :href="`/${alphaCode}`">
            <p v-text="countryName"></p>
        </router-link>
    </div>
</template>

<script setup>
defineProps({
    countryCode: {
        type: String
    },
    countryName: {
        type: String
    },
    alphaCode: {
        type: String
    }
}
)

</script>

<style scoped></style>