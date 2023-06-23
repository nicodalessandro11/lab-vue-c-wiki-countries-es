<template>
    <div>
        <div class="row country-flag text-center mx-5" style="margin: 60px;">
            <div class="col-12">
                <img style="width: 120px;"
                    :src="`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code}.png`"
                    :alt="countryDetails.alpha2Code">
            </div>
        </div>
        <div class="row country-detail-table">
            <div class="col-10">
                <h1 class="ms-3" v-text="countryDetails.name"></h1>
                <table class="table ms-3 mt-5">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Capital</th>
                            <td v-text="countryDetails.capital"></td>
                        </tr>
                        <tr>
                            <th scope="row">Area</th>
                            <td v-text="countryDetails.area"></td>
                        </tr>
                        <tr>
                            <th scope="row">Borders</th>
                            <td>
                                <ul>
                                    <li v-for="border in countryDetails.borders">{{ border }}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCountryStore } from '../stores/countries'

const store = useCountryStore();
const route = useRoute();
const countryDetails = ref({})

watch(() => route.params.alpha3Code, (newCountryCode) => {
    store.setCountryCode(newCountryCode);
    countryDetails.value = store.currentCountry;
}, { immediate: true });


</script>

<style scoped></style>




