import React, { Component } from 'react';

class AddPanel extends Component {
    
    state = {
        text: ''
    };

    render() {
        const { onAdd } = this.props;

        return (
            <div className='row justify-content-center mb-5'>
                <div className="col-sm-8 col-md-6 col-lg-4">
                    <form
                        className='input-group'
                        onSubmit={ (e) => {
                            e.preventDefault();
                            onAdd(this.state.text);
                            this.setState( { text: '' } );
                        }
                        }
                    >
                        <input 
                            className='form-control'
                            type="text"
                            onChange={ (e) => this.setState(( { text } ) => {
                                return { text: e.target.value };
                            }) }
                            value={ this.state.text }
                        />
                        <button className='btn btn-dark'>Add</button>
                    </form>
                </div>
            </div>
        );
    };
};

export default AddPanel;