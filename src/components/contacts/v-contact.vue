<template>
    <div class="v-contact" @click="toUserChat">
        <div class="v-contact__avatar-container">
            <div class="v-contact__avatar"></div>
            <div class="v-contact__status"
                v-if="contact_data.status === 'online'"
            ></div>
        </div>
        <div class="v-contact__container">
            <div class="v-contact__container-chat-name">{{ contact_data.name }}</div>
            <div class="v-contact__container-last-message" v-if="chat">{{ chat.chat[chat.chat.length - 1].text }}</div>
        </div>
        <div class="v-contact__last-message-time" v-if="chat">{{ chat.chat[chat.chat.length - 1].time }}</div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: 'v-contact',
        props: {
            contact_data: {
                type: Object,
                default: () => {}
            },
            chat: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            ...mapActions([
               'SET_USER_TO_HEADER' 
            ]),
            toUserChat() {
                this.$router.push({
                    name: 'chat',
                    query: {'id': this.chat.id}
                })
                let user = {name: this.contact_data.name, status: this.contact_data.status}
                this.SET_USER_TO_HEADER(user)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>