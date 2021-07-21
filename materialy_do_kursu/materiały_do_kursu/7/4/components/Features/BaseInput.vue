<template>
    <div>
        <p>Podaj nazwe przedmiotu: </p>
        <input type="text" :value="value" @input="$emit('input', $event.target.value)"/>
    </div>
</template>

<script>
    export default {
        props: ['value']
    }
</script>