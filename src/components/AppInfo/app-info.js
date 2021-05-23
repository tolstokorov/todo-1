import React from 'react';

const AppInfo = ( { list, onFilter, filter } ) => {

    const done = list.filter(item => item.done).length;
    const attention = list.filter(item => item.attention).length;
    const all = list.length;


    const left = ' --';
    const right = '-- ';


    return (
        <h2>Info:
            <span> 
                <span onClick={ () => onFilter('done') }> 
                    { filter === 'done' ? left : null } Done: { done } { filter === 'done' ? right : null }
                </span> | 
                <span onClick={ () => onFilter('attention') }> 
                    { filter === 'attention' ? left : null } Attention: { attention } { filter === 'attention' ? right : null }
                </span> | 
                <span onClick={ () => onFilter('all') }> 
                    { filter === 'all' ? left : null } All: { all } { filter === 'all' ? right : null }
                </span>
            </span>
        </h2>
    );
};

export default AppInfo;