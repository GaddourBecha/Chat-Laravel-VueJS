<template>
    <div class="chat-log">
        <chat-message v-for="message in messages" :message="message"></chat-message>
        <div class="empty" v-show="messages.length === 0">Empty conversation</div>
    </div>
</template>

<script>
    export default {
        props: ['messages']
    }
</script>

<style>
    .chat-log .chat-message:nth-child(even){
        background-color: #ccc;
    }
    .chat-log .chat-message:nth-child(odd){
        background-color: #eee;
    }
</style>