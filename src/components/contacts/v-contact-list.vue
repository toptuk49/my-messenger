<template>
    <div class="v-contact-list">
        <v-contact
            v-for="contact in contacts"
            :key="contact.id"
            :contact_data="contact"
            :chat_data="chats[contact.id - 1]"
            @click="toUserChat(contact)"
        />
    </div>
</template>

<script>
    import vContact from './v-contact'
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'v-contact-list',
        components: {
            vContact
        },
        computed: {
            ...mapState([
                'contacts',
                'chats'
            ])
        },
        methods: {
            ...mapActions([
                'FETCH_CONTACTS',
                'FETCH_CHATS',
                'SET_USER_TO_HEADER'
            ]),
            toUserChat(contact) {
                this.$router.push({
                    name: 'chat',
                    query: {'id': contact.id}
                })
                let user = {name: contact.name, status: contact.status}
                this.SET_USER_TO_HEADER(user)
            }
        },
        mounted() {
            this.FETCH_CONTACTS();
            this.FETCH_CHATS();
        }
    }
</script>

<style lang="scss" scoped>

</style>