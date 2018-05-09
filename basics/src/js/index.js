Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app1Data = {};
var app1Methods = {};

app1Data.message = 'Hey! Vue.js!';
app1Data.seen = true;
app1Data.todos = [
    {text: 'Learn js'},
    {text: 'Learn angular'},
    {text: 'Learn Vue'},
    {text: 'Build something awesome'}
];

app1Methods.reverseMessage = function () {
    this.message = this.message.split('').reverse().join('')
};

var app1Created = function () {
  console.log("created hook");
};

//vue instance
var app1 = new Vue({
    el: '#app1',
    data: app1Data,
    methods: app1Methods,
    created: app1Created
});