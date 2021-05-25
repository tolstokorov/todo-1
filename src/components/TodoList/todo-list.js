import React from 'react';
import TodoListItem from '../TodoListItem';

const TodoList = ( { list, onDel, onDone, onAttention } ) => {

    const items = list.map(item => <li key={ item.id }
        className='my-3'
    >
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