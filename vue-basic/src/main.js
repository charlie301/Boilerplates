import Vue from 'vue';

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
