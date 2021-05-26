import React from 'react';

const TodoListItem = ( { label, attention, done, onDone, onDel, onAttention } ) => {
    return (
        <span className='text-break'
        >
            <span
                className={ `lead 
                    ${ done ? 'text-muted text-decoration-line-through' : 
                    attention ? 'fw-bold' : '' }` }
                onClick={ () => {
                    onDone()
                 } }
            >{ label }</span>&nbsp;&nbsp;&nbsp;
            <button className='btn btn-success '
                onClick={ () => {
                    onAttention()
                } }
                disabled={ done }
            > ! </button>&nbsp;
            <button className='btn btn-danger '
                onClick={ () => {
                    onDel()
                } }
            > X </button>
        </span>
    );
};

export default TodoListItem;