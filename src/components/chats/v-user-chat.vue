<template>
    <div class="v-user-chat">
        <div class="v-user-chat__msg-container">
            <v-message
                v-for="message in chat.chat"
                :key="message.id"
                :message="message"
            />
        </div>
        <div class="v-user-chat__input-container">
            <div class="v-user-chat__input-container__smile">
                <i class="material-icons">sentiment_satisfied_alt</i>
            </div>
            <input type="text" v-model="message_to_send" v-on:keyup.enter="sendMessage" v-on:keyup.esc="goBack" ref="input" placeholder="Сообщение" class="v-user-chat__input-container__msg-input" autofocus="autofocus" />
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
    import {mapState} from 'vuex'
    import {mapActions} from 'vuex'
    import vMessage from './v-message'

    export default {
        name: 'v-user-chat',
        components: {
            vMessage
        },
        data() {
            return {
                message_to_send: ''
            }
        },
        computed: {
            ...mapState([
                'chats'
            ]),
            chat() {
                let chat_id = this.$route.query.id - 1
                return this.chats[chat_id]
            }
        },
        methods: {
            ...mapActions([
                'SEND_MESSAGE'
            ]),
            sendMessage() {
                let message = {
                    id: this.chat.chat.length + 1,
                    time: new Date().toLocaleTimeString('en-US',
                        {
                            hour12: false,
                            hour: "numeric",
                            minute: "numeric"
                        }
                    ),
                    text: this.message_to_send,
                    type: "own"
                }
                
                this.chat.chat.push(message)

                this.SEND_MESSAGE({user_id: this.chat.id, chat: this.chat})
                    .then(() => {
                        this.message_to_send = ''
                    })
            },
            goBack() {
                this.$router.go(-1)
            }
        },
        mounted() {
            let input = this.$refs.input
            input.focus()
            input.addEventListener('blur', function () {
                input.focus()
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>