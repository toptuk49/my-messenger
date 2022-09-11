<template>
    <div class="v-main-wrapper">
        <v-header />
        <router-view />
    </div>
</template>

<script>
    import vHeader from './layouts/v-header'

    export default {
        name: 'v-main-wrapper',
        components: {
            vHeader
        }
    }
</script>

<style lang="scss" scoped>
    
</style>