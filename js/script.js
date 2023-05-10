const app = Vue.createApp ({

    data () {
        return {
            newTodoText: '',
            newTodo: {
                text: '',
                done: false,
            },
            inputError: false,
            todos: [
                {
                    text: 'fare esecizio',
                    done: false,
                }, {
                    text: 'fare spesa',
                    done: false,
                },{
                    text: 'fare lavatrice',
                    done: false,
                },{
                    text: 'fare esecizio fisico',
                    done: true,
                },
            ],
        };
    },

    methods: {
        addTodo() {
            let cleanedTodo = this.newTodoText.trim();
            if (cleanedTodo.length >= 5){
                this.todos.unshift({
                    text: this.newTodoText,
                    done: false,
                });
                this.newTodoText = '';
                this.inputError = false;
            } else {
                this.inputError = true;
            }
        },

        deleteItem(i) {
            this.todos.splice(i, 1)
        },

        revertDone(i) {
            this.todos[i].done = !this.todos[i].done
        }
    },

});

app.mount ('#root');