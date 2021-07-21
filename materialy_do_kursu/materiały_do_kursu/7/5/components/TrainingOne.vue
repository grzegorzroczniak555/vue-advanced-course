<template>
    <div>
        <h2>{{title}} {{name}}</h2>
        <div :style="style">
            Imie: <input type="text" v-model.trim="name" />
            <div 
                class="special-square" 
                :class="{ '--toCircle': isCircle }"
                @click="isCircle = !isCircle">Kliknij!</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String
        },
        data() { 
            return { 
                name: '',
                style: { 
                    'color': 'blue'
                },
                isCircle: false
            }
        }
    }
</script>