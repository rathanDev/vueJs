Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

//for fields
var app1Data = {};
//for methods
var app1Methods = {};
//a computed getter - cached based on their dependencies
var app1Computed = {};

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
app1Methods.getReversedMessage = function () {
  return this.message.split('').reverse().join('');
};

var app1Created = function () {
  console.log("created hook");
};

app1Computed.reversedMessage = function () {
    return this.message.split('').reverse().join('')
};

//vue instance
var app1 = new Vue({
    el: '#app1',
    data: app1Data,
    methods: app1Methods,
    created: app1Created,
    computed: app1Computed
});