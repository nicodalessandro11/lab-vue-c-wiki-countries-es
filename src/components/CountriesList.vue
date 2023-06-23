<template>
    <div class="container w-75 mt-5">
        <div class="row mt-5">
            <div class="col-4 mt-5" style="max-height: 82vh; overflow-y: scroll;">
                <div v-for="country in store.countries" :key="country.alpha2Code" class="border text-center py-4">
                    <Country :countryCode="country.alpha2Code.toLowerCase()" :countryName="country.name.common"
                        :alphaCode="country.alpha3Code" />
                </div>
            </div>
            <div class="col-8 mt-5">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script setup>
import Country from './Country.vue';
import { useCountryStore } from '../stores/countries'

const store = useCountryStore();

</script>

<style scoped></style>

