<template>
    <v-container>
        <v-row no-gutters>
            <v-col md="5" cols="12">
                <v-text-field
                    :loading="loading"
                    density="compact"
                    variant="solo"
                    label="Search templates"
                    append-inner-icon="mdi-magnify"
                    single-line
                    hide-details
                    clearable
                    @click:append-inner="onClick"
                ></v-text-field>

                <h3>Categories</h3>
                <div>Category 1</div>
                <div>Category 2</div>
                <div>Category 3</div>

            </v-col>
            <v-col md="7" cols="12">
                block 2
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    setup() {
        const onClick = (e) => {
            console.log(e);
        }
        return {
            onClick,
            loading: false,
        }
    }
}
</script>