Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var data = {};
var methods = {};

data.message = 'Hey! Vue.js!';
data.seen = true;
data.todos = [
    {text: 'Learn js'},
    {text: 'Learn angular'},
    {text: 'Learn Vue'},
    {text: 'Build something awesome'}
];

methods.reverseMessage = function () {
    this.message = this.message.split('').reverse().join('')
};

//vue instance
var app = new Vue({
    el: '#app',
    data: data,
    methods: methods
});