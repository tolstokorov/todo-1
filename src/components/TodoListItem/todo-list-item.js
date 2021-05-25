import React from 'react';

const TodoListItem = ( { id, label, attention, done, onDone, onDel, onAttention } ) => {
    return (
        <span className='text-break'
        >
            <span
                className={ `lead 
                    ${ done ? 'text-muted text-decoration-line-through' : 
                    attention ? 'fw-bold' : '' }` }
                onClick={ () => {
                    onDone(id)
                 } }
            >{ label }</span>&nbsp;&nbsp;&nbsp;
            <button className='btn btn-success '
                onClick={ () => {
                    onAttention(id)
                } }
                disabled={ done }
            > ! </button>&nbsp;
            <button className='btn btn-danger '
                onClick={ () => {
                    onDel(id)
                } }
            > X </button>
        </span>
    );
};

export default TodoListItem;