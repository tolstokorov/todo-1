import React, { Component } from 'react';

class AddPanel extends Component {
    
    state = {
        text: ''
    };

    render() {
        const { onAdd } = this.props;

        return (
            <form
                onSubmit={ (e) => {
                    e.preventDefault();
                    onAdd(this.state.text);
                    this.setState( { text: '' } );
                }
                }
            >
                <input 
                    type="text"
                    onChange={ (e) => this.setState(( { text } ) => {
                        return { text: e.target.value };
                    }) }
                    value={ this.state.text }
                />
                <button>Add</button>
            </form>
        );
    };
};

export default AddPanel;