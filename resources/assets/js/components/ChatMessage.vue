<template>
    <div class="chat-message">
        <p>{{ message.message }}</p>
      <strong>  <small>{{ message.user.name }}</small></strong>
    </div>
</template>

<script>
    export default {
        props: ['message']
    }
</script>

<style>
    .chat-message{
        padding: 1rem;
    }
    .chat-message > p{
        margin-bottom: 1rem;
    }
</style>