##### Vue notes
------------

- Create a new vue instance to bind to DOM element
```js
const app = new Vue({
  el: '#app',
  data: {
    message: 'some message',
    code: 'hello from secret'
  }
})
```

- Binding - v-bind
```js
<span v-bind:title="code">Hover over for code </span>
```

- Adding conditionals to HTML - v-if=
```js
//Javascript
const conditional = new Vue({
  el: "#cond",
  data: {
    seen: true
  }
});
//Html
<div id="cond">
  <p v-if="seen"> Now you see me </p>
</div>
```

- Iterating over array of objects v-for=" var in array"
```js
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
//html
<div id="loop">
  <ul>
    <li v-for="person in names">
      {{person.name}}
    </li>
  </ul>
</div>
```
- Binding methods to components - v-on:
```js
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
//Html
<div id="revString">
  <p> {{message}} </p>
  <button v-on:click="reverse">Reverse String </button>
</div>
//
```

- Instant DOM Binding
```js
const msgBind = new Vue({
  el: '#msgBind',
  data: {
    message: "change me"
  }
});
//html
<div id="msgBind">
  <p> {{message}} </p>
  <input v-model="message">
</div>
```

#### Creating components
