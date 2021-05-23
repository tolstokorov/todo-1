import React, { Component } from 'react';
import Header from '../Header';
import TodoList from '../TodoList';
import AddPanel from '../AddPanel';
import SearchPanel from '../SearchPanel';
import AppInfo from '../AppInfo';

class App extends Component {

    state = {
        todoList: [
            { id: 1, label: 'learn React', attention: false, done: false },
            { id: 2, label: 'have a good time', attention: false, done: false },
        ],
        search: '',
        filter: 'all' // 'all' | 'attention' | 'done'
    };

    onAdd = (text) => {
        this.setState(( { todoList } ) => {
            const newEl = { 
                id: Math.max(...todoList.map(el => el.id), 1) + 1,
                label: text === '' ? 'Empty' : text,
                attention: false,
                done: false,
            };

            return {
                todoList: [
                    ...todoList,
                    newEl
                ]
            };
        });
    };

    onDel = (id) => {
        this.setState(( { todoList } ) => {
            const elIndex = todoList.findIndex(el => el.id === id);
    
            return {
                todoList: [
                    ...todoList.slice(0, elIndex),
                    ...todoList.slice(elIndex + 1),
                ]
            };
        });
    };

    onAttention = (id) => {
        this.setState(( { todoList } ) => {
            const elIndex = todoList.findIndex(el => el.id === id);

            const newEl = {
                ...todoList[elIndex],
                attention: !todoList[elIndex].attention
            };

            return {
                todoList: [
                    ...todoList.slice(0, elIndex),
                    newEl,
                    ...todoList.slice(elIndex + 1),
                ]
            };
        });
    }

    onDone = (id) => {
        this.setState(( { todoList } ) => {
            const elIndex = todoList.findIndex(el => el.id === id);

            const newEl = {
                ...todoList[elIndex],
                done: !todoList[elIndex].done
            };

            return {
                todoList: [
                    ...todoList.slice(0, elIndex),
                    newEl,
                    ...todoList.slice(elIndex + 1),
                ]
            };
        });
    };

    search = (items, text) => {
        if (text === '') return items;
        return items.filter(item => item.label.toLocaleLowerCase().indexOf(text) !== -1);
    };

    onSearch = (text) => {
        this.setState({ search: text.toLocaleLowerCase() });
    };

    filter = (items, filter) => {
        switch (filter) {
            case 'done':
                return items.filter(item => item.done);

            case 'attention':
                return items.filter(item => item.attention);

            case 'all': 
            default:
                return items;
        };
    };

    onFilter = (filter) => {
        this.setState({
            filter: filter
        });
    };

    render() {
        const listAfter = this.search(
            this.filter(this.state.todoList, this.state.filter), this.state.search);

        return (
            <>
            <Header />
            <SearchPanel
                onSearch={ this.onSearch }
                search={ this.state.search }
            />
            <AppInfo
                list={ listAfter }
                
                onFilter={ this.onFilter }
                filter={ this.state.filter }
            />
            <TodoList
                list={ listAfter }

                onDel={ this.onDel }
                onAttention={ this.onAttention }
                onDone={ this.onDone }
            />
            <AddPanel
                onAdd={ this.onAdd }
            />
        </>
        )
    };
};

export default App;