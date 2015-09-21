(function () {
  'use strict';

  var TodoService = function () {
    this.todos = ["todo 1", "todo 2", "todo 3"];
  };

  var TodoApp = ng
    .Component({
      selector: 'todo-app',
      appInjector: [TodoService]
    })
    .View({
      // template: 'html...',
      templateUrl: 'todo-app.html',
      directives: [ng.NgFor, ng.NgIf]
    })
    .Class({
      constructor: [TodoService, function (todoService) {
        console.log('Todo list');
        this.todos = todoService.todos;
      }],

      addTodo: function (todo) {
        console.log(todo);
        this.todos.push(todo);
      },

      keyup: function ($event) {
        if ($event.which === 13 && $event.target.value !== '') {
          this.addTodo($event.target.value);
          $event.target.value = null;
        }
      }
    });

  document.addEventListener('DOMContentLoaded', function () {
    ng.bootstrap(TodoApp, [TodoService]);
  });

})();

