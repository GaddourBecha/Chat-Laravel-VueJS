


require('./bootstrap');

Vue.component('example', require('./components/Example.vue'));
Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('chat-composer', require('./components/ChatComposer.vue'));


const app = new Vue({
    el: '#app',
    data(){
      return {
          messages:[]
      }
    },
    created: function () {
        axios.get('/messages').then(response => {
            this.messages= response.data;
            // console.log(response);




        });


        Echo.join('chatroom')
            //.here()
            //.joining()
           // .leaving()
            .listen('Posted',(e)=>{
                this.messages.push({
                    message : e.message.message,
                    user : {
                        name : e.user.name
                    }
                })
                console.log("dqbjqb");
            });



    },
    methods :{
                add(message){
                    this.messages.push(message);
                  axios.post('/messages',message);



                }
            }
});
