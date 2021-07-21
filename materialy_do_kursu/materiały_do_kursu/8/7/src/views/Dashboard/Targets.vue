<template>
    <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
            Wyjść na prostą
            <transition name="fade">
                <small v-if="e6 > 1">Ukończono 26.10.1997r.</small>
            </transition>
        </v-stepper-step>

        <v-stepper-content step="1">
            <v-btn color="primary" @click.native="e6++">Wyszliśmy</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
            Zatrudnić 100 pracowników
            <transition name="fade">
                <small v-if="e6 > 2">Ukończono 12.12.1998r.</small>
            </transition>
        </v-stepper-step>

        <v-stepper-content step="2">
            <v-btn color="primary" @click.native="e6++">Zatrudniliśmy</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">
            Pierwszy $1 000 000
            <transition name="fade">
                <small v-if="e6 > 3">Ukończono 12.12.2000r.</small>
            </transition>
        </v-stepper-step>

        <v-stepper-content step="3">
            <v-btn color="primary" @click.native="e6++">Zarobiliśmy</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 4" step="4">
            Wejść na giełde
            <transition name="fade">
                <small v-if="e6 > 4">Ukończono 12.12.2003r.</small>
            </transition>
        </v-stepper-step>

        <v-stepper-content step="4">
            <v-btn color="primary" @click.native="e6++">Weszliśmy</v-btn>
        </v-stepper-content>
    </v-stepper>
</template>

<script>
    export default {
        data() {
            return {
                e6: 1
            }
        }
    }
</script>