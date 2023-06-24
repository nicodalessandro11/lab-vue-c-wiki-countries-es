<template>
    <div>
        <div class="col-12">
            <img v-if="alpha2Code" style="width: 120px;"
                :src="`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code}.png`" :alt="alpha2Code">
        </div>
    </div>
</template>

<script setup>
defineProps({
    alpha2Code: {
        type: String
    },
})

</script>

<style scoped></style>