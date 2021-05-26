import React from 'react';
import TodoListItem from '../TodoListItem';

const TodoList = ( { list, onDel, onDone, onAttention } ) => {

    const items = list.map(item => <li key={ item.id }
        className='my-3'
    >
        <TodoListItem
            label={ item.label }
            onDel={ () => onDel(item.id) }
            
            attention={ item.attention }
            onAttention={ () => onAttention(item.id) }

            done={ item.done }
            onDone={ () => onDone(item.id) }
            />
    </li>);

    return (
        <ol className='p-0 m-0 my-5'
            style={ {
                listStylePosition: 'inside'
            } }
        >
            { items }
        </ol>
    );
};

export default TodoList;