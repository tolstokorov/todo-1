import React from 'react';

const TodoListItem = ( { id, label, attention, done, onDone, onDel, onAttention } ) => {
    return (
        <span>
            <button
                onClick={ () => {
                    onDel(id)
                 } }
            > X </button>&nbsp;
            <button
                onClick={ () => {
                    onAttention(id)
                 } }
                disabled={ done }
            > ! </button>&nbsp;
            <span
                onClick={ () => {
                    onDone(id)
                 } }
            >{ label }{ done ? ' __DONE__' : null }{ !done && attention ? ' __attention!__' : null }</span>
        </span>
    );
};

export default TodoListItem;