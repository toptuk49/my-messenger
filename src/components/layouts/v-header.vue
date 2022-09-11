<template>
    <div class="v-header">
        <v-default-header v-if="this.$route.path !== '/chat'"/>
        <v-user-chat-header v-else />
    </div>
</template>

<script>
    import vDefaultHeader from './header/v-default-header'
    import vUserChatHeader from './header/v-user-chat-header'

    export default {
        name: 'v-header',
        components: {
            vDefaultHeader,
            vUserChatHeader
        }
    }
</script>

<style lang="scss" scoped>

</style>