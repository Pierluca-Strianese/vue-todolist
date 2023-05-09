const app = Vue.createApp ({

    data () {
        return {
            newTodo: '',
            inputError: 'false',
            todos: [
                {
                    text: 'fare esecizio',
                    done: 'false',
                }, {
                    text: 'fare spesa',
                    done: 'false',
                },{
                    text: 'fare lavatrice',
                    done: 'false',
                },{
                    text: 'fare esecizio fisico',
                    done: 'true',
                },
            ],
        };
    },

    methods: {
        addTodo() {
            let cleanedTodo = this.newTodo.trim();
            if (cleanedTodo.length >= 5){
                this.todos.unshift(cleanedTodo);
                this.newTodo = '';
                this.inputError = 'false';
            } else {
                this.inputError = 'true';
            }
        },

        deleteItem(i) {
            this.todos.splice(i, 1)
        },

        revertDone(i) {
            let done = todos.done(i);
            this.todos.done(i) = !done;
        }
    },

});

app.mount ('#root');