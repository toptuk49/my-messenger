<template>
    <div class="v-message" :class="className">
        <div class="v-message__text">{{ message.text }}</div>
        <div class="v-message__time">{{ message.time }}</div>
    </div>
</template>

<script>
    export default {
        name: 'v-message',
        props: {
            message: {
                type: Object,
                default: () => {}
            }
        },
        computed: {
            className() {
                return {
                    'own': this.message.type === 'own',
                    'others': this.message.type === 'others'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>