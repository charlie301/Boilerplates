import Vue from 'vue/dist/vue.js';

/**
* Create new Vue instance and bind componenet / id to it
* @param -> el) element id to bind to
* @param -> app-comp) <el> to bind in the dom to
*/
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello there!'
  }
});


const app2 = new Vue({
  el: '#app2',
  data: {
    message: 'you checked this out at ' + new Date(),
    secretNote: 'The fox is dressed in blue'
  }
});

const conditional = new Vue({
  el: "#cond",
  data: {
    seen: true
  }
});

const app4 = new Vue({
  el: '#loop',
  data: {
    names: [
      {name: 'Charlie'},
      {name: 'Roger MckNellie'},
      {name: 'Damien Kerscog'},
      {name: 'Lonnie winzhest'},
    ]
  }
});

const revString = new Vue({
  el: "#revString",
  data: {
    message: "How easy it is to reverse :)"
  },
  methods: {
    reverse: function(){
      this.message = this.message.split('').reverse().join('');
    }
  }
});

const msgBind = new Vue({
  el: '#msgBind',
  data: {
    message: "change me"
  }
});
