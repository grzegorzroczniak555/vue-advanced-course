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
    },
    render(createElement) {
        
    }
};