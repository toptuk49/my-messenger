<template>
    <div class="v-contact">
        <div class="v-contact__avatar-container">
            <div class="v-contact__avatar"></div>
            <div class="v-contact__status"
                v-if="contact_data.status === 'online'"
            ></div>
        </div>
        <div class="v-contact__container">
            <div class="v-contact__container-chat-name">{{ contact_data.name }}</div>
            <div class="v-contact__container-last-message" v-if="chat_data">{{ chat_data.chat[chat_data.chat.length - 1].text }}</div>
        </div>
        <div class="v-contact__last-message-time" v-if="chat_data">{{ chat_data.chat[chat_data.chat.length - 1].time }}</div>
    </div>
</template>

<script>
    export default {
        name: 'v-contact',
        props: {
            contact_data: {
                type: Object,
                default: () => {}
            },
            chat_data: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>