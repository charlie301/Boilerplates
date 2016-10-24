import Vue from 'vue/dist/vue.js';
import vueResource from 'vue-resource';
Vue.use(vueResource);
/* ============================================================================
                    STATELESS COMPONENTS
==============================================================================*/

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

/* ============================================================================
                    STATEFUL COMPONENTS
==============================================================================*/

/**
* Define custom Vue component
* @param 1 - Namm of componenet
* @param 2 - Object {
*               prop -
*               template -
*                 }
*/
Vue.component('name-list', {
  props: ['name'],
  template: '<li><h1>{{name.name.first}} : </h1>{{name.name.last}}</li>'
});

/*
* Ajax exampl
*/
const someHolder = new Vue({
  el: '#holder',
  data:
  {
    users: []
  },
  mounted: function()
  {
    this.fetchUsers();
  },
  methods:
  {
    fetchUsers: function()
    {
      this.$http.get('https://randomuser.me/api/?results=10&inc=name,nat')
                .then((response) => {
                  let responseNames = response.body.results;
                  this.users = response.body.results;
                },(response) => {
                  console.log('Error in request : ' + response);
                });
    }
  }
});
