<template>
    <div>
        <h1 class="ms-3" v-text="name"></h1>
        <table class="table ms-3 mt-5">
            <thead>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Capital</th>
                    <td v-text="capital"></td>
                </tr>
                <tr>
                    <th scope="row">Area</th>
                    <td v-text="area"></td>
                </tr>
                <tr>
                    <th scope="row">Borders</th>
                    <td>
                        <ul>
                            <li v-for="border in borders">{{ border }}</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script setup>
defineProps({
    name: {
        type: String
    },
    capital: {
        type: String
    },
    area: {
        type: Number
    },
    borders: {
        type: Array
    }
})

</script>

<style scoped></style>