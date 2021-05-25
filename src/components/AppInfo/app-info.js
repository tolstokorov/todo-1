import React from 'react';

const Label = ( { text, list } ) => {
    return (
        <span
            className='mb-1'
        >{ text }:&nbsp;{ list }</span>
    );
};

const Btn = ( { text, filterStr, onFilter, filter } ) => {
    return (
        <div className="col">
            <button className={ `btn border shadow ${filter === filterStr ? 'btn-success' : 'btn-light' }` }
                onClick={ () => onFilter(filterStr) }
            >{ text }</button>
        </div>
    );
};

const Cell = ( { children } ) => {
    return (
        <section className='col'>
            { children }
        </section>
    );
};

const AppInfo = ( { list, onFilter, filter } ) => {
        
    const done = list.filter(item => item.done).length;
    const attention = list.filter(item => item.attention).length;
    const all = list.length;

    return (
        <div className='h-100 row align-items-center'>
            <Cell>
                <Label text={ 'Available now' } list={ all }/>
                <Btn text='All' filterStr='all'
                    filter={ filter } onFilter={ onFilter }
                />
            </Cell>
            <Cell>
                <Label text={ 'Done' } list={ done }/>
                <Btn text='Only done' filterStr='done'
                    filter={ filter } onFilter={ onFilter }
                />
            </Cell>
            <Cell>
                <Label text={ 'Attention' } list={ attention }/>
                <Btn text='Only attention' filterStr='attention'
                    filter={ filter } onFilter={ onFilter }
                />
            </Cell>
        </div>
    );
};

export default AppInfo;