<template>
    <div class="v-contact-list">
        <v-contact
            v-for="contact in contacts"
            :key="contact.id"
            :contact_data="contact"
            :chat="chats[contact.id - 1]"  
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
                'FETCH_CHATS'
            ]),
        },
        mounted() {
            this.FETCH_CONTACTS();
            this.FETCH_CHATS();
        }
    }
</script>

<style lang="scss" scoped>

</style>