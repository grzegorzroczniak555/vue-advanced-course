<template>
    <div>
        <HelloWorld/>
        <UsersList/>
    </div>
</template>

<script>
    import HelloWorld from './HelloWorld.vue';
    import UsersList from './UsersList.vue';

    export default {
        components: {
            HelloWorld,
            UsersList
        }
    }
</script>