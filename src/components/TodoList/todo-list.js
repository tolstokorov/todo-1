import React from 'react';
import TodoListItem from '../TodoListItem';

const TodoList = ( { list, onDel, onDone, onAttention } ) => {

    const items = list.map(item => <li key={ item.id }>
        <TodoListItem
            id={ item.id }

            label={ item.label }
            onDel={ onDel }
            
            attention={ item.attention }
            onAttention={ onAttention }

            done={ item.done }
            onDone={ onDone }
            />
    </li>);

    return (
        <ul>
            { items }
        </ul>
    );
};

export default TodoList;