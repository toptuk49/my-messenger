<template>
    <div class="v-user-chat">
        <div class="v-user-chat__msg-container">
            <v-message />
        </div>
        <div class="v-user-chat__input-container">
            <div class="v-user-chat__input-container__smile">
                <i class="material-icons">sentiment_satisfied_alt</i>
            </div>
            <input type="text" placeholder="Сообщение" class="v-user-chat__input-container__msg-input" autofocus />
            <div class="v-user-chat__input-container__clip">
                <i class="material-icons">attach_file</i>
            </div>
            <div class="v-user-chat__input-container__mic">
                <i class="material-icons">mic</i>
            </div>
        </div>
    </div>
</template>

<script>
    import vMessage from './v-message'

    export default {
        name: 'v-user-chat',
        components: {
            vMessage
        }
    }
</script>

<style lang="scss" scoped>

</style>