<template>
    <div>
        <div class="row country-flag text-center mx-5" v-if="countryDetails" style="margin: 60px;">
            <CountryDetailsImage :alpha2Code="countryDetails.alpha2Code" />
        </div>
        <div class="row country-detail-table">
            <div class="col-10">
                <CountryDetailsTable v-if="countryDetails" :name="countryDetails.name" :capital="countryDetails.capital"
                    :area="countryDetails.area" :borders="countryDetails.borders" />
            </div>
        </div>
    </div>
</template>

<script setup>
import CountryDetailsImage from './CountryDetailsImage.vue'
import CountryDetailsTable from './CountryDetailsTable.vue'
import { watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCountryStore } from '../stores/countries'

const store = useCountryStore();
const route = useRoute();
const countryDetails = ref(null)

watchEffect(async () => {
    if (!store.countries.length) {
        await store.loadCountries();
    }
    store.setCountryCode(route.params.alpha3Code);
    countryDetails.value = store.currentCountry;
});

</script>
