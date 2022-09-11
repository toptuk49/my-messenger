<template>
    <div class="v-user-chat-header">
        <div class="v-user-chat-header__main">
            <div class="v-user-chat-header__main__back" @click="goBack">
                <i class="material-icons">keyboard_backspace</i>
            </div>
            <div class="v-user-chat-header__main__avatar"></div>
            <div class="v-user-chat-header__main__user-container">
                <div class="v-user-chat-header__main__user-container__username">{{ currentUserChat.name }}</div>
                <div class="v-user-chat-header__main__user-container__last-online-time" :class="className">{{ formatStatus }}</div>
            </div>
        </div>
        <div class="v-user-chat-header__communication">
            <div class="v-user-chat-header__communication__video-call">
                <i class="material-icons">videocam</i>
            </div>
            <div class="v-user-chat-header__communication__call">
                <i class="material-icons">phone</i>
            </div>
        </div>
        
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'v-user-chat-header',
        computed: {
            ...mapState([
                'currentUserChat'
            ]),
            formatStatus() {
                return this.currentUserChat.status === 'offline' ? 'был(а) в сети Давно' : 'в сети'
            },
            className() {
                return {
                    'online': this.currentUserChat.status === 'online',
                    'offline': this.currentUserChat.status === 'offline'
                }
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>