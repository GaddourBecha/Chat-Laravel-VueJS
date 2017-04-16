<template>
    <div class="chat-composer">
        <input type="text" placeholder="Type your message..." v-model="text" @keyup.enter="send">
        <button class="btn btn-xs btn-primary" @click="send" >Send</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                text :''
            }
        },
        methods :{
            send(){
                this.$emit('sent',{
                    message:this.text,
                    user:  {
                        name :$('.nom-chat').text()
                    }
                });
                this.text='';
            }
        }
    }
</script>

<style>
    .chat-composer {
        display : flex;
    }
    .chat-composer input{
        flex: 1 auto ;
    }
    .chat-composer button{
        border-radius : 0;
    }
</style>