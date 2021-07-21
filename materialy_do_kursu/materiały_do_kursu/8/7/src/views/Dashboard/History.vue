<template>
    <v-timeline class="px-5">
        <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :color="year.color"
            small>
            <template v-slot:opposite>
                <span :class="`headline font-weight-bold ${year.color}--text`"
                        v-text="year.year"></span>
            </template>
            <div class="py-3">
                <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">{{year.header}}</h2>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus massa, eleifend condimentum elementum ac, consequat eu ipsum. Fusce vitae ligula neque. Vivamus vitae ultrices lacus. Duis scelerisque placerat tellus ac sodales. Sed mollis nisi non rutrum tincidunt. Ut sed felis viverra, lobortis turpis nec, condimentum nisi. Aenean sem diam, vulputate condimentum tortor at, porttitor iaculis nulla. Praesent id viverra neque. Morbi mauris lectus, accumsan quis sem non, lacinia convallis dui. Suspendisse interdum egestas lacinia. Suspendisse vitae massa egestas augue auctor cursus. Sed erat diam, aliquam a tristique non, vulputate id sapien. Pellentesque nec rhoncus felis. Donec sed consectetur ligula, non semper erat.
                </div>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
    export default {
        data() {
            return {
                years: [
                    {
                        color: 'black',
                        year: '1960',
                        header: 'Założenie firmy'
                    },
                    {
                        color: 'green',
                        year: '1972',
                        header: 'Pierwszy milion przychodu'
                    },
                    {
                        color: 'pink',
                        year: '1976',
                        header: '200 tysięcy zadowolonych klientów'
                    },
                    {
                        color: 'amber',
                        year: '1982',
                        header: 'Wejście na giełde'
                    },
                    {
                        color: 'orange',
                        year: '1995',
                        header: 'Współpraca z Google'
                    },
                    {
                        color: 'indigo',
                        year: '1997',
                        header: 'Współpraca z NASA'
                    }
                ]
            }
        }
    }
</script>