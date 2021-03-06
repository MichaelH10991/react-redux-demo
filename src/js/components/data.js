export default {
    newTodo: {
        title: 'New Todo',
        url: '/addNewTodo',
    },
    updateTodos: {
        title: 'Update Todos',
        url: '/updateTodos',
    },
    posts: {
        title: 'Posts',
        url: '/posts',
        filters: [{ field: 'thing', predicate: 'equals', value: 'persons' }],
        columnIds: ['thing', 'thing1'],
    },
}
