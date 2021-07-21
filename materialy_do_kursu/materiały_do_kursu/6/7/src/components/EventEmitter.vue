<template>
    <div></div>
</template>

<script>
    export default {
        name: "ComputedTDD",

        methods: {
            emitEvent() {
                this.$emit("customEvent", {
                    name: 'Johny',
                    password: 'johny123!@#'
                });
            }
        }
    };
</script>