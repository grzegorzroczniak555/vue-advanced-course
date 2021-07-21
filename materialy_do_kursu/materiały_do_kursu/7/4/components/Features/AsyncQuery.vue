<template>
    <div>
        <template v-if="isLoading">
            <p>Trwa ładowanie...</p>
        </template>
        <template v-else>
            <ul v-if="results.length">
                <li v-for="(result, index) in results" :key="index">
                    {{result}}
                </li>
            </ul>
            <p v-else>
                Brak wyników
            </p>
        </template>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isLoading: true,
            results: null
        }
    },
    mounted(){
        // Symulujemy ładowanie
        setTimeout(() => {
            this.isLoading = false;
            this.results = [
                "Tomasz",
                "Filip",
                "Jarosław",
                "Izajasz",
                "Kacper"
            ];
        }, 1000);
    }
};
</script>