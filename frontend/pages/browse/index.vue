<script setup>
import { FIELDS, OFFERS, TYPES, LANG } from '@/helpers/constants'
const selectedFields = ref([])
const selectedOffers = ref([])
const selectedTypes = ref([])
const selectedLang = ref([])
const loading = ref(false)
const searchValue = ref('')
const currentLocalization = ref('')
const currentLang = ref('')
const currentType = ref('')
const currentField = ref('')
const currentOffer = ref('')

function updateField() {
    currentField.value = selectedFields.value.join(',')
    currentLang.value = selectedLang.value.join(',')
    currentType.value = selectedTypes.value.join(',')
    currentOffer.value = selectedOffers.value.join(',')
}

function onClick() {
    loading.value = true
    console.log(searchValue.value)

    setTimeout(async () => {
        loading.value = false
    }, 5000)
}

const { data: jobs } = await useFetch(`http://localhost:8000/api/v1/jobs/annonce/`, {
    query: { q: searchValue, localization: currentLocalization, job_offer_in: currentOffer, job_fields_in: currentField, job_time_in: currentType, language_in: currentLang },
})
</script>

<template>
    <v-container>
        <v-row no-gutters>
            <v-col md="5" cols="12">
                <v-text-field
                    :loading="loading"
                    v-model="searchValue"
                    density="compact"
                    variant="solo"
                    label="Search templates"
                    append-inner-icon="mdi-magnify"
                    single-line
                    hide-details
                    clearable
                    @click:append-inner="onClick()"
                ></v-text-field>

                <h3>Domaine d'emplois</h3>
                <v-checkbox v-model="selectedFields" v-for="(category, idx) of FIELDS" :key="idx" :label="`fields.${category}`" :value="category" @change="updateField"></v-checkbox>
                
                <h3>Type de contrat</h3>
                <v-checkbox v-model="selectedOffers" v-for="(category, idx) of OFFERS" :key="idx" :label="`fields.${category}`" :value="category" @change="updateField"></v-checkbox>
                
                <h3>Type de poste</h3>
                <v-checkbox v-model="selectedTypes" v-for="(category, idx) of TYPES" :key="idx" :label="`fields.${category}`" :value="category" @change="updateField"></v-checkbox>
                
                <h3>Language</h3>
                <v-checkbox v-model="selectedLang" v-for="(category, idx) of LANG" :key="idx" :label="`fields.${category}`" :value="category" @change="updateField"></v-checkbox>

            </v-col>
            <v-col md="7" cols="12">
                <template v-if="jobs">
                    <Job v-for="job in jobs" :key="job.id" :job="job" />
                </template>
            </v-col>
        </v-row>
    </v-container>
</template>
